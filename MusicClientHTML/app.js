function searchSpotify(id) {

    var accessToken = "BQBzdUqh6X2qVDHPzRKNb-I-ttjY8vk37DyIiGRa8EQjq45-JBYbpQgNt4weks29Ve4x3lsLamLSIiE2EOdrk0lUgcDJSxcKacRruwKnL8zBQg3pipklQhAF5tq-2h-GiNT5Nti8ziLR"
    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/top-tracks?country=us"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {

        console.log(response)
        $(".popular-songs1").text("1" + " " + response.tracks[0].name)
        $(".popular-songs2").text("2" + " " + response.tracks[1].name)
        $(".popular-songs3").text("3" + " " + response.tracks[2].name)
        $(".popular-songs4").text("4" + " " + response.tracks[3].name)
        $(".popular-songs5").text("5" + " " + response.tracks[4].name)

        $(".popular-songs1").on("click", function (event) {

            $(".preview-player").html('<source src=' + response.tracks[0].preview_url + 'type="audio/mpeg"></source>')

        })
        $(".popular-songs2").on("click", function (event) {

            $(".preview-player").html('<source src=' + response.tracks[1].preview_url + 'type="audio/mpeg"></source>')

        })
        $(".popular-songs3").on("click", function (event) {

            $(".preview-player").html('<source src=' + response.tracks[2].preview_url + 'type="audio/mpeg"></source>')

        })
        $(".popular-songs4").on("click", function (event) {

            $(".preview-player").html('<source src=' + response.tracks[3].preview_url + 'type="audio/mpeg"></source>')

        })
        $(".popular-songs5").on("click", function (event) {

            $(".preview-player").html('<source src=' + response.tracks[4].preview_url + 'type="audio/mpeg"></source>')

        })


        // $(".preview-player").html('<source src=' +response.tracks[0].preview_url + 'type="audio/mpeg"></source>')
        console.log(response.tracks[0].preview_url)
    })
}

function searchSpotifyName() {
    var inputArtist = $("#validationDefault01").val().trim();

    var accessToken = "BQBzdUqh6X2qVDHPzRKNb-I-ttjY8vk37DyIiGRa8EQjq45-JBYbpQgNt4weks29Ve4x3lsLamLSIiE2EOdrk0lUgcDJSxcKacRruwKnL8zBQg3pipklQhAF5tq-2h-GiNT5Nti8ziLR"
    var queryUrl = "https://api.spotify.com/v1/search?q=" + inputArtist + "&type=artist&limit=1"
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {
        $(".header-image").css("background-image", "url(" + response.artists.items[0].images[0].url + ")")

        var artistName = (response.artists.items[0].name)
        var artistSplit = artistName.split(" ")

        if (artistSplit.length === 1) {
            $(".band-header").text(artistSplit)
            $(".band-header2").text(artistSplit)
            $(".band-header2").css("transform", "scaleX(-1) rotate(180deg)")

        }
        if (artistSplit.length === 2) {
            $(".band-header").text(artistSplit[0])
            $(".band-header2").text(artistSplit[1])
            $(".band-header2").css("transform", "none")


        }

        if (artistSplit.length === 3) {
            $(".band-header").text(artistSplit[0]);
            $(".band-header2").text(artistSplit[1] + " " + " " + artistSplit[2])
            $(".band-header2").css("transform", "none")


        }

        // $(".band-header").text(artistName)
        // $(".band-header").text(response.artists.items[0].name)

        searchAlbumCovers(response.artists.items[0].id)
        searchSpotify(response.artists.items[0].id)
        searchRelatedArtists(response.artists.items[0].id)
        getTrack(response.id)
    })
}


function searchAlbumCovers(id) {


    var accessToken = "BQBzdUqh6X2qVDHPzRKNb-I-ttjY8vk37DyIiGRa8EQjq45-JBYbpQgNt4weks29Ve4x3lsLamLSIiE2EOdrk0lUgcDJSxcKacRruwKnL8zBQg3pipklQhAF5tq-2h-GiNT5Nti8ziLR"
    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/albums?market=us&limit=10"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {

        $(".image-results").attr("src", response.items[0].images[0].url)
        $(".image-results2").attr("src", response.items[1].images[0].url)
        $(".image-results3").attr("src", response.items[2].images[0].url)
        $(".image-results4").attr("src", response.items[3].images[0].url)
        $(".image-results5").attr("src", response.items[4].images[0].url)
        $(".image-results6").attr("src", response.items[6].images[0].url)

        console.log(response.items[0].images[0].url)
        console.log(response)


    })
}

function searchRelatedArtists(id) {

    var accessToken = "BQBzdUqh6X2qVDHPzRKNb-I-ttjY8vk37DyIiGRa8EQjq45-JBYbpQgNt4weks29Ve4x3lsLamLSIiE2EOdrk0lUgcDJSxcKacRruwKnL8zBQg3pipklQhAF5tq-2h-GiNT5Nti8ziLR"
    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/related-artists"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {
        $(".related1").attr("src", response.artists[0].images[0].url)
        $(".related2").attr("src", response.artists[1].images[0].url)
        $(".related3").attr("src", response.artists[2].images[0].url)
        $(".related4").attr("src", response.artists[3].images[0].url)


        $(".name1").text(response.artists[0].name)
        $(".name2").text(response.artists[1].name)
        $(".name3").text(response.artists[2].name)
        $(".name4").text(response.artists[3].name)
        console.log(response)


    })
}


function getTrack(id) {
    var accessToken = "BQBzdUqh6X2qVDHPzRKNb-I-ttjY8vk37DyIiGRa8EQjq45-JBYbpQgNt4weks29Ve4x3lsLamLSIiE2EOdrk0lUgcDJSxcKacRruwKnL8zBQg3pipklQhAF5tq-2h-GiNT5Nti8ziLR"
    var queryUrl = "https://api.spotify.com/v1/tracks/" + id

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {
        console.log(response)




    })
}


$(".play-button").on("click", function (event) {
    event.preventDefault();
    var video = $(".preview-player")
    video.trigger('play');


}
)
$(".submit-button").on("click", function (event) {

    event.preventDefault();
    if ($("#validationDefault01").val() !== "") {
        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();
        getTrack();
    }


    $("#validationDefault01").val("")

})

