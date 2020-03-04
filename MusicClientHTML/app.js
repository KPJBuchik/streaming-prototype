function searchSpotify() {
    var inputArtist = $("#validationDefault01").val().trim();

    var accessToken = "BQBnEoP1Paf6ZKi0Ll1VPWENz4bkYEcIC1jM9K2HS-JIkkUgq_KI8yMpPijjh88q-YsbsFSOwCrqO0c7zDe38DPADydC3PHhR5z3wQMSZmMzk83dVF0o1xi78TwESYav55H7bbcVqe8U"
    var queryUrl = "https://api.spotify.com/v1/search?q=" + inputArtist + "&type=artist&limit=1"
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {
        console.log(response)

        // var artistName=$(".band-header").text(response.artists.items[0].name)
        var imgURL = $(".image-results").attr("src", response.artists.items[0].images[1].url)
        console.log(imgURL)
        console.log(artistName)
        SearchTopTracks(response.artists.items[0].id)
    })
}

function searchSpotifyName() {
    var inputArtist = $("#validationDefault01").val().trim();

    var accessToken = "BQBnEoP1Paf6ZKi0Ll1VPWENz4bkYEcIC1jM9K2HS-JIkkUgq_KI8yMpPijjh88q-YsbsFSOwCrqO0c7zDe38DPADydC3PHhR5z3wQMSZmMzk83dVF0o1xi78TwESYav55H7bbcVqe8U"
    var queryUrl = "https://api.spotify.com/v1/search?q=" + inputArtist + "&type=artist&limit=1"
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {
        console.log(response)
        var artistName = (response.artists.items[0].name)
        var artistSplit = artistName.split(" ")
        if (artistSplit.length === 1) {
            $(".band-header").text(artistName)
            $(".band-header2").text(" ")
        }
        if (artistSplit.length === 2) {
            $(".band-header").text(artistSplit[0])
            $(".band-header2").text(artistSplit[1])
        }

        if (artistSplit.length === 3) {
            $(".band-header").text(artistSplit[0]);
            $(".band-header2").text(artistSplit[1] + " "+ " " + artistSplit[2])


        }


        // $(".band-header").text(artistName)
        // $(".band-header").text(response.artists.items[0].name)


        console.log(artistName)
        console.log(artistName.length)
        SearchTopTracks(response.artists.items[0].id)
    })
}

$(".submit-button").on("click", function (event) {

    event.preventDefault();
    if ($("#validationDefault01").val() !== "") {
        searchSpotify();
        searchSpotifyName();
    }


    $("#validationDefault01").val("")

})
