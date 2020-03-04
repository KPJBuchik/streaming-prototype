function searchSpotify() {
    var inputArtist = $("#validationDefault01").val().trim();

    var accessToken = "BQBstL6YOxYFjJ-k0CTkKamkzJmXnYdVhju2r0xMDDSXocvTchkSw3SReyy7U8ehhsBARNr2ERLJMwm4jOg3dhgPjV3A3omEU8lr6aaphHgP3xBuYC1kT_g6JaC_XVcDy7_9kStU3EWF"
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

    var accessToken = "BQBstL6YOxYFjJ-k0CTkKamkzJmXnYdVhju2r0xMDDSXocvTchkSw3SReyy7U8ehhsBARNr2ERLJMwm4jOg3dhgPjV3A3omEU8lr6aaphHgP3xBuYC1kT_g6JaC_XVcDy7_9kStU3EWF"
    var queryUrl = "https://api.spotify.com/v1/search?q=" + inputArtist + "&type=artist&limit=1"
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {
        console.log(response)
        var artistName=(response.artists.items[0].name)
        if (artistName.length == 1){
            $(".band-header").text(artistName)
            // $(".band-header").text(response.artists.items[0].name)
        }
        if (artistName.length > 1){
            $(".band-header2").text(artistName.length[1])

        }
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
