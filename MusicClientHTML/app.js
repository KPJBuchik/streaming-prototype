var count = 0




function getPlaylists() {


    var accessToken = "BQB9LiN8MoZMBjWAzWNtYoEOtItDALxxLWXnkhOAk8FEALCLGZGiJ-GIxZ3y8qmeuK3GvPR25x1U-fKbB78sHOO6tofx2imWcWMQzH1MtAmoUf7IbBSwZVJZZsazh5xevuIUBaOk1Vfh"
    var queryUrl = "https://api.spotify.com/v1/me/playlists"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {
        $("ul").text(response.items[0].name)
        $("ul:nth-child(2)").text(response.items[1].name)
        $("ul:nth-child(3)").text(response.items[2].name)
        $("ul:nth-child(4)").text(response.items[3].name)
        $("ul:nth-child(5)").text(response.items[4].name)
        $("ul:nth-child(6)").text(response.items[5].name)
        $("ul:nth-child(7)").text(response.items[6].name)
        $("ul:nth-child(8)").text(response.items[7].name)
        $("ul:nth-child(9)").text(response.items[8].name)
        $("ul:nth-child(10)").text(response.items[9].name)
        $("ul:nth-child(11)").text(response.items[10].name)
        $("ul:nth-child(12)").text(response.items[11].name)
        $("ul:nth-child(13)").text(response.items[12].name)
        $("ul:nth-child(14)").text(response.items[13].name)
        $("ul:nth-child(15)").text(response.items[14].name)
        $("ul:nth-child(16)").text(response.items[15].name)
        $("ul:nth-child(17)").text(response.items[16].name)
        $("ul:nth-child(18)").text(response.items[17].name)
        $("ul:nth-child(19)").text(response.items[18].name)

        console.log(response.items.name)




    });
}

$(document).ready(function () {
    console.log("ready")
    getPlaylists();
});


function searchSpotify(id) {

    var accessToken = "BQB9LiN8MoZMBjWAzWNtYoEOtItDALxxLWXnkhOAk8FEALCLGZGiJ-GIxZ3y8qmeuK3GvPR25x1U-fKbB78sHOO6tofx2imWcWMQzH1MtAmoUf7IbBSwZVJZZsazh5xevuIUBaOk1Vfh"
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
            event.preventDefault();
            $(".preview-player").attr("src", response.tracks[0].preview_url)

        })
        $(".popular-songs2").on("click", function (event) {
            event.preventDefault();
            $(".preview-player").attr("src", response.tracks[1].preview_url)

        })
        $(".popular-songs3").on("click", function (event) {
            event.preventDefault();
            $(".preview-player").attr("src", response.tracks[2].preview_url)

        })
        $(".popular-songs4").on("click", function (event) {
            event.preventDefault();
            $(".preview-player").attr("src", response.tracks[3].preview_url)

        })
        $(".popular-songs5").on("click", function (event) {
            event.preventDefault();
            $(".preview-player").attr("src", response.tracks[4].preview_url)

        })


        // $(".preview-player").html('<source src=' +response.tracks[0].preview_url + 'type="audio/mpeg"></source>')
        console.log(response.tracks[0].preview_url)
    })
}


function searchSpotifyName() {
    var inputArtist = $("#validationDefault01").val().trim();

    var accessToken = "BQB9LiN8MoZMBjWAzWNtYoEOtItDALxxLWXnkhOAk8FEALCLGZGiJ-GIxZ3y8qmeuK3GvPR25x1U-fKbB78sHOO6tofx2imWcWMQzH1MtAmoUf7IbBSwZVJZZsazh5xevuIUBaOk1Vfh"
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


    var accessToken = "BQB9LiN8MoZMBjWAzWNtYoEOtItDALxxLWXnkhOAk8FEALCLGZGiJ-GIxZ3y8qmeuK3GvPR25x1U-fKbB78sHOO6tofx2imWcWMQzH1MtAmoUf7IbBSwZVJZZsazh5xevuIUBaOk1Vfh"
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

    var accessToken = "BQB9LiN8MoZMBjWAzWNtYoEOtItDALxxLWXnkhOAk8FEALCLGZGiJ-GIxZ3y8qmeuK3GvPR25x1U-fKbB78sHOO6tofx2imWcWMQzH1MtAmoUf7IbBSwZVJZZsazh5xevuIUBaOk1Vfh"
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
    var accessToken = "BQB9LiN8MoZMBjWAzWNtYoEOtItDALxxLWXnkhOAk8FEALCLGZGiJ-GIxZ3y8qmeuK3GvPR25x1U-fKbB78sHOO6tofx2imWcWMQzH1MtAmoUf7IbBSwZVJZZsazh5xevuIUBaOk1Vfh"
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
    console.log(count)
    count++;
    var play = $(".play-button")
    var video = $(".preview-player")
    if (count % 2 === 0) {
        video.trigger('play')
    }
    else { video.trigger("pause") }


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

$('#volume').on('change', function () {
    $('.preview-player').prop("volume", this.value);
});