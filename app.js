// const hash = window.location.hash
// .substring(1)
// .split('&')
// .reduce(function (initial, item) {
//   if (item) {
//     var parts = item.split('=');
//     initial[parts[0]] = decodeURIComponent(parts[1]);
//   }
//   return initial;
// }, {});
// window.location.hash = '';

// // Set token
// let _token = hash.access_token;

// const authEndpoint = 'https://accounts.spotify.com/authorize';

// // Replace with your app's client ID, redirect URI and desired scopes
// const clientId = 'b6ce36d62a8246c1b73f73fa4d28cfb5';
// const redirectUri = 'https://kpjbuchik.github.io/streaming-prototype/';
// const scopes = [
//   'user-read-email'

// ];

// // If there is no token, redirect to Spotify authorization
// if (!_token) {
//   window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
// }

var count = 0


//get user image
function getUserProfile() {


    var queryUrl = "https://api.spotify.com/v1/me/"

    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {
            console.log("1" + response)
            $(".user-name").text(response.display_name)
            $(".user-image").attr("src", response.images[0].url)
        }
    });


}


//ajax call to populate sidebar with playlists
function getPlaylists() {


    var accessToken = "BQC3XDGFbsdEgoKjX8e2jgF3MWcvnND1cgy1bbVGaa__y-DRq7F-j9TZFB9gPHnLh-i01Zf3Hpy6_DOaXLRrbpn0aixUewHpTmfR3X55IOh6Dvx9lSXXDMD4GcAJthwwcpU1Fg5gmXlf"
    var queryUrl = "https://api.spotify.com/v1/me/playlists"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {
        $("ul").text(response.items[0].name)
        $("ul").attr("value", response.items[0].id)
        $("ul").on("click", function () {
            $(".album-cover-page").attr("src", response.items[0].images[0].url)
            $(".album-page-name").text(response.items[0].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })
        $("ul:nth-child(2)").text(response.items[1].name)
        $("ul:nth-child(2)").attr("value", response.items[1].id)
        $("ul:nth-child(2)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[1].images[0].url)
            $(".album-page-name").text(response.items[1].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })


        $("ul:nth-child(3)").text(response.items[2].name)
        $("ul:nth-child(3)").attr("value", response.items[2].id)
        $("ul:nth-child(3)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[2].images[0].url)
            $(".album-page-name").text(response.items[2].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })
        $("ul:nth-child(4)").text(response.items[3].name)
        $("ul:nth-child(4)").attr("value", response.items[3].id)
        $("ul:nth-child(4)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[3].images[0].url)
            $(".album-page-name").text(response.items[3].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(5)").text(response.items[4].name)
        $("ul:nth-child(5)").attr("value", response.items[4].id)
        $("ul:nth-child(5)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[4].images[0].url)
            $(".album-page-name").text(response.items[4].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(6)").text(response.items[5].name)
        $("ul:nth-child(6)").attr("value", response.items[5].id)
        $("ul:nth-child(6)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[5].images[0].url)
            $(".album-page-name").text(response.items[5].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(7)").text(response.items[6].name)
        $("ul:nth-child(7)").attr("value", response.items[6].id)
        $("ul:nth-child(7)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[6].images[0].url)
            $(".album-page-name").text(response.items[6].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(8)").text(response.items[7].name)
        $("ul:nth-child(8)").attr("value", response.items[7].id)
        $("ul:nth-child(8)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[7].images[0].url)
            $(".album-page-name").text(response.items[7].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(9)").text(response.items[8].name)
        $("ul:nth-child(9)").attr("value", response.items[8].id)
        $("ul:nth-child(9)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[8].images[0].url)
            $(".album-page-name").text(response.items[8].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(10)").text(response.items[9].name)
        $("ul:nth-child(10)").attr("value", response.items[9].id)
        $("ul:nth-child(10)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[9].images[0].url)
            $(".album-page-name").text(response.items[9].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(11)").text(response.items[10].name)
        $("ul:nth-child(11)").attr("value", response.items[10].id)
        $("ul:nth-child(11)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[10].images[0].url)
            $(".album-page-name").text(response.items[10].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(12)").text(response.items[11].name)
        $("ul:nth-child(12)").attr("value", response.items[11].id)
        $("ul:nth-child(12)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[11].images[0].url)
            $(".album-page-name").text(response.items[11].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(13)").text(response.items[12].name)
        $("ul:nth-child(13)").attr("value", response.items[12].id)
        $("ul:nth-child(13)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[12].images[0].url)
            $(".album-page-name").text(response.items[12].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(14)").text(response.items[13].name)
        $("ul:nth-child(14)").attr("value", response.items[13].id)
        $("ul:nth-child(14)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[13].images[0].url)
            $(".album-page-name").text(response.items[13].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(15)").text(response.items[14].name)
        $("ul:nth-child(15)").attr("value", response.items[14].id)
        $("ul:nth-child(15)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[14].images[0].url)
            $(".album-page-name").text(response.items[14].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })
        $("ul:nth-child(16)").text(response.items[15].name)
        $("ul:nth-child(16)").attr("value", response.items[15].id)
        $("ul:nth-child(16)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[15].images[0].url)
            $(".album-page-name").text(response.items[15].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(17)").text(response.items[16].name)
        $("ul:nth-child(17)").attr("value", response.items[16].id)
        $("ul:nth-child(17)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[16].images[0].url)
            $(".album-page-name").text(response.items[16].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(18)").text(response.items[17].name)
        $("ul:nth-child(18)").attr("value", response.items[17].id)
        $("ul:nth-child(18)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[17].images[0].url)
            $(".album-page-name").text(response.items[17].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(19)").text(response.items[18].name)
        $("ul:nth-child(19)").attr("value", response.items[18].id)
        $("ul:nth-child(19)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[18].images[0].url)
            $(".album-page-name").text(response.items[18].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })


        console.log(response.items.name)

    });
}


function getPlaylistTracks() {

    $("ul, .cowboy").click(function () {

        var playlistId = $(this).attr("value")


        var accessToken = "BQC3XDGFbsdEgoKjX8e2jgF3MWcvnND1cgy1bbVGaa__y-DRq7F-j9TZFB9gPHnLh-i01Zf3Hpy6_DOaXLRrbpn0aixUewHpTmfR3X55IOh6Dvx9lSXXDMD4GcAJthwwcpU1Fg5gmXlf"
        var queryUrl = "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks"

        $.ajax({
            url: queryUrl,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
        }).then(function (response) {
            console.log(response)
            for (let i = 0; i < response.items.length; i++) {
                let newTime = timeConversion(response.items[i].track.duration_ms)
                let trackTime = $("<p>").text(newTime).addClass("track-time")
                let results = response.items[i].track.name
                let tracklistDiv = $("<div>")
                tracklistDisplay = $("<p>").text(results + "-" + response.items[i].track.artists[0].name).addClass("playlist-track")
                let trackHr = $("<hr>")
                tracklistDiv.html(tracklistDisplay)
                $(".track-list").append(tracklistDiv)
                $(".track-list").append(trackHr)
                $(tracklistDiv).append(trackTime)

                $(".playlist-track").click(function () {
                    event.preventDefault();
                    console.log(response)
                    $(".now-playing-artist").text(response.items[i].track.album.artists[0].name) //WHY?
                    $(".now-playing-song").text(response.items[i].track.name)

                    $("#preview-player").attr("src", response.items[i].track.preview_url)
                    $(".album-cover").attr("src", response.items[i].track.album.images[0].url)
                    $(".now-playing-artist").html(response.items[i].track.artist.name) //this makes it work for some reasons

                })


            }
        })

    });


}

//uhhhhh
$(".cowboy").on("click", function (event) {
    event.preventDefault()
    $(".grid-container3").css("display", "inline-grid")
    $(".grid-container").css("display", "hidden")
    $(".grid-container2").css("display", "hidden");
    getPlaylistTracks()

})


$(document).ready(function () {
    console.log("ready")
    getPlaylists();
    getUserProfile();
});

//get artists top tracks and album covers
function searchSpotify(id) {

    var accessToken = "BQC3XDGFbsdEgoKjX8e2jgF3MWcvnND1cgy1bbVGaa__y-DRq7F-j9TZFB9gPHnLh-i01Zf3Hpy6_DOaXLRrbpn0aixUewHpTmfR3X55IOh6Dvx9lSXXDMD4GcAJthwwcpU1Fg5gmXlf"
    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/top-tracks?country=us"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {

        console.log(response)

        $(".popular-songs1").html("1" + " " + response.tracks[0].name)
        $(".popular-songs2").text("2" + " " + response.tracks[1].name)
        $(".popular-songs3").text("3" + " " + response.tracks[2].name)
        $(".popular-songs4").text("4" + " " + response.tracks[3].name)
        $(".popular-songs5").text("5" + " " + response.tracks[4].name)


        $(".popular-songs1").on("click", function (event) {
            console.log(response)
            event.preventDefault();
            $("#preview-player").attr("src", response.tracks[0].preview_url)
            $(".now-playing-song").text(response.tracks[0].name)
            $(".now-playing-artist").text(response.tracks[0].artists[0].name)
            $(".album-cover").attr("src", response.tracks[0].album.images[0].url)
        })
        $(".popular-songs2").on("click", function (event) {
            event.preventDefault();
            $("#preview-player").attr("src", response.tracks[1].preview_url)
            $(".now-playing-song").text(response.tracks[1].name)
            $(".now-playing-song").text(response.tracks[1].name)
            $(".now-playing-artist").text(response.tracks[1].artists[0].name)
            $(".album-cover").attr("src", response.tracks[1].album.images[0].url)



        })
        $(".popular-songs3").on("click", function (event) {
            event.preventDefault();
            $("#preview-player").attr("src", response.tracks[2].preview_url)
            $(".now-playing-song").text(response.tracks[2].name)
            $(".now-playing-song").text(response.tracks[2].name)
            $(".now-playing-artist").text(response.tracks[2].artists[0].name)
            $(".album-cover").attr("src", response.tracks[2].album.images[0].url)


        })
        $(".popular-songs4").on("click", function (event) {
            event.preventDefault();
            $("#preview-player").attr("src", response.tracks[3].preview_url)
            $(".now-playing-song").text(response.tracks[3].name)
            $(".now-playing-song").text(response.tracks[3].name)
            $(".now-playing-artist").text(response.tracks[3].artists[0].name)
            $(".album-cover").attr("src", response.tracks[3].album.images[0].url)

        })
        $(".popular-songs5").on("click", function (event) {
            event.preventDefault();
            $("#preview-player").attr("src", response.tracks[4].preview_url)
            $(".now-playing-song").text(response.tracks[4].name)
            $(".now-playing-song").text(response.tracks[4].name)
            $(".now-playing-artist").text(response.tracks[4].artists[0].name)
            $(".album-cover").attr("src", response.tracks[4].album.images[0].url)

        })



        // $(".preview-player").html('<source src=' +response.tracks[0].preview_url + 'type="audio/mpeg"></source>')
        console.log(response.tracks[0].preview_url)
    })
}




//initial function to retrieve artists name, artist picture and populates other search functions wit id callbacks
function searchSpotifyName() {
    var inputArtist = $(".validationDefault01").val().trim() || $(".validationDefault02").val().trim() || $(".validationDefault03").val().trim()

    var accessToken = "BQC3XDGFbsdEgoKjX8e2jgF3MWcvnND1cgy1bbVGaa__y-DRq7F-j9TZFB9gPHnLh-i01Zf3Hpy6_DOaXLRrbpn0aixUewHpTmfR3X55IOh6Dvx9lSXXDMD4GcAJthwwcpU1Fg5gmXlf"
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
        searchSpotifyNameClone(response.artists.items[0].id)


    })



}

function searchSpotifyNameClone(id) {
    var accessToken = "BQC3XDGFbsdEgoKjX8e2jgF3MWcvnND1cgy1bbVGaa__y-DRq7F-j9TZFB9gPHnLh-i01Zf3Hpy6_DOaXLRrbpn0aixUewHpTmfR3X55IOh6Dvx9lSXXDMD4GcAJthwwcpU1Fg5gmXlf"
    var queryUrl = "https://api.spotify.com/v1/artists/" + id
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {




        $(".header-image").css("background-image", "url(" + response.images[0].url + ")")

        var artistName = (response.name)
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
        if (artistSplit.length > 3) {
            $(".band-header").text(artistName);
        }

        // $(".band-header").text(artistName)
        // $(".band-header").text(response.artists.items[0].name)




    })

}








//get top album covers
function searchAlbumCovers(id) {


    var accessToken = "BQC3XDGFbsdEgoKjX8e2jgF3MWcvnND1cgy1bbVGaa__y-DRq7F-j9TZFB9gPHnLh-i01Zf3Hpy6_DOaXLRrbpn0aixUewHpTmfR3X55IOh6Dvx9lSXXDMD4GcAJthwwcpU1Fg5gmXlf"
    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/albums?market=us&limit=10"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {

        $(".image-results").attr("src", response.items[0].images[0].url)
        $(".image-results").attr("value", response.items[0].id)
        $(".image-results2").attr("src", response.items[1].images[0].url)
        $(".image-results2").attr("value", response.items[1].id)

        $(".image-results3").attr("src", response.items[2].images[0].url)
        $(".image-results3").attr("value", response.items[2].id)

        $(".image-results4").attr("src", response.items[3].images[0].url)
        $(".image-results4").attr("value", response.items[3].id)

        $(".image-results5").attr("src", response.items[4].images[0].url)
        $(".image-results5").attr("value", response.items[4].id)

        $(".image-results6").attr("src", response.items[6].images[0].url)
        $(".image-results6").attr("value", response.items[6].id)


        $(".album-name").text(response.items[0].name)
        $(".album-name2").text(response.items[1].name)
        $(".album-name3").text(response.items[2].name)
        $(".album-name4").text(response.items[3].name)
        $(".album-name5").text(response.items[4].name)
        $(".album-name6").text(response.items[5].name)
        $(".album-name7").text(response.items[6].name)



        console.log(response.items[0].images[0].url)
        console.log(response)


    })


}
$(document).ready(
function getAlbumTracklist() {
    $(".image-results").click(function () {

        var albumId = $(this).attr("value");
        var accessToken = "BQC3XDGFbsdEgoKjX8e2jgF3MWcvnND1cgy1bbVGaa__y-DRq7F-j9TZFB9gPHnLh-i01Zf3Hpy6_DOaXLRrbpn0aixUewHpTmfR3X55IOh6Dvx9lSXXDMD4GcAJthwwcpU1Fg5gmXlf"
        var queryUrl = "https://api.spotify.com/v1/albums/" + albumId + "/tracks"

        $.ajax({
            url: queryUrl,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
        }).then(function (response) {

            for (let i = 0; i < response.items.length; i++) {

                let tracklistDiv = $("<div>")
                let results = response.items[i].name

                tracklistDisplay = $("<p>").text(results).addClass("track")
                let trackHr = $("<hr>")
                let albumTrackDuration = response.items[i].duration_ms
                let newAlbumTrackTime = timeConversion(albumTrackDuration)
                let trackTime = $("<p>").text(newAlbumTrackTime).addClass("track-time")
                let trackNumber = (response.items[i].track_number)

                tracklistDiv.html(tracklistDisplay)

                $(".track-list").append(tracklistDiv)
                $(".track-list").append(trackHr)
                $(tracklistDiv).append(trackTime)
                $(tracklistDiv).prepend(trackNumber + " " + " " + " " + " ").addClass("track-number")



                $(".track").on("click", function () {
                    $("#preview-player").attr("src", response.items[i].preview_url)

                    $(".now-playing-song").html(response.items[i].name)

                    $(".now-playing-artist").html(response.items[i].artists[0].name)
                    $(".now-playing-artist").html(response.items[i].track.artists[0].name)//wtf 

                    console.log("working")

                })

            }



        })

    })

}
)
$(document).ready(
function getAlbumInfo() {
    $(".image-results").on("click", function () {
        var albumId = $(this).attr("value");
        var accessToken = "BQC3XDGFbsdEgoKjX8e2jgF3MWcvnND1cgy1bbVGaa__y-DRq7F-j9TZFB9gPHnLh-i01Zf3Hpy6_DOaXLRrbpn0aixUewHpTmfR3X55IOh6Dvx9lSXXDMD4GcAJthwwcpU1Fg5gmXlf"
        var queryUrl = "https://api.spotify.com/v1/albums/" + albumId

        $.ajax({
            url: queryUrl,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
        }).then(function (response) {
            console.log(response)

            $(".track-list").on("click", function (event) {
                event.preventDefault();
                $(".album-cover").attr("src", response.images[0].url)


            })
            let releaseDate = (response.release_date);
            let releaseYear = releaseDate.split("-");

                $(".album-cover-page").attr("src", response.images[0].url)
                $(".album-page-name").text(response.name)
                $(".by-artist-album").text("by " + response.artists[0].name)
                $(".release-date").text(releaseYear[0] + "-" + response.total_tracks + " Tracks")

        

        })
    })


}
)
//get artists related artists
function searchRelatedArtists(id) {

    var accessToken = "BQC3XDGFbsdEgoKjX8e2jgF3MWcvnND1cgy1bbVGaa__y-DRq7F-j9TZFB9gPHnLh-i01Zf3Hpy6_DOaXLRrbpn0aixUewHpTmfR3X55IOh6Dvx9lSXXDMD4GcAJthwwcpU1Fg5gmXlf"
    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/related-artists"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {
        $(".related1").attr("src", response.artists[0].images[0].url)
        $(".related1").attr("value", response.artists[0].id)


        $(".related2").attr("src", response.artists[1].images[0].url)
        $(".related3").attr("src", response.artists[2].images[0].url)
        $(".related4").attr("src", response.artists[3].images[0].url)


        $(".name1").text(response.artists[0].name)
        $(".name2").text(response.artists[1].name)
        $(".name3").text(response.artists[2].name)
        $(".name4").text(response.artists[3].name)
        console.log(response)
        //when related artists are clicked 

        $(".circle1").on("click", function (event) {
            event.preventDefault();
            searchRelatedArtists(response.artists[0].id)
            searchSpotify(response.artists[0].id);
            searchAlbumCovers(response.artists[0].id);
            searchSpotifyNameClone(response.artists[0].id); //this one doesn't work
        })
        $(".circle2").on("click", function (event) {
            event.preventDefault();
            searchRelatedArtists(response.artists[1].id)
            searchSpotify(response.artists[1].id);
            searchAlbumCovers(response.artists[1].id);
            searchSpotifyNameClone(response.artists[1].id); //this one doesn't work
        })
        $(".circle3").on("click", function (event) {
            event.preventDefault();
            searchRelatedArtists(response.artists[2].id)
            searchSpotify(response.artists[2].id);
            searchAlbumCovers(response.artists[2].id);
            searchSpotifyNameClone(response.artists[2].id); //this one doesn't work
        })
        $(".circle4").on("click", function (event) {
            event.preventDefault();
            searchRelatedArtists(response.artists[3].id)
            searchSpotify(response.artists[3].id);
            searchAlbumCovers(response.artists[3].id);
            searchSpotifyNameClone(response.artists[3].id); //this one doesn't work
        })


    })
}


function timeConversion(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

$("ul").on("click", function (event) {

    event.preventDefault();
    console.log("JESUS")

    $(".grid-container3").css("display", "inline-grid")
    $(".grid-container").css("display", "hidden")
    $(".grid-container2").css("display", "hidden")
    $(".track-list").empty()
    getPlaylistTracks();
    $(".album-page-title").text("Playlist")


})

$(".top-albums").on("click", function () {

    $(".grid-container3").css("display", "inline-grid")
    getAlbumInfo()
    getAlbumTracklist();


})

$(".browse").on("click", function (event) {
    event.preventDefault();
    $(".grid-container").css("display", "inline-grid")
    $(".grid-container3").css("display", "none")
    $(".grid-container2").css("display", "none")


})

$(".by-artist-album").on("click", function (event) {
    event.preventDefault();
    let backToArtist = $(".by-artist-album").text()
    searchSpotify(backToArtist)

    $(".grid-container2").css("display", "inline-grid")
    $(".grid-container3").css("display", "none")
})



$(".play-button").on("click", function (event) {

    event.preventDefault();
    $(".play-button").attr("src", "play2.svg")
    console.log(count)
    count++;
    var play = $(".play-button")
    var video = $("#preview-player")
    if (count % 2 === 0) {
        video.trigger('play')
        $(".play-button").attr("src", "Component 60 – 2.png")

    }
    else { video.trigger("pause") }


}
)
var submitCount = 0
$(".submit-button").on("click", function (event) {
    event.preventDefault();
    console.log("value: " + $(".validationDefault01").val())
    submitCount++;

    if ($(".validationDefault01").val() !== "") {
        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();

    }
    $(".grid-container2").css("display", "inline-grid")
    $(".grid-container3").css("display", "none")

    $(".validationDefault01").val("")
    $(".track-list").empty()


})

$(".submit-button2").on("click", function (event) {
    event.preventDefault();
    console.log("value:" + $(".validationDefault02").val())
    submitCount++;
    if ($(".validationDefault02").val() !== "") {
        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();
    }

    $(".validationDefault02").val("")
    $(".track-list").empty()

})
$(".submit-button3").on("click", function (event) {
    event.preventDefault();
    console.log("value:" + $(".validationDefault03").val())
    submitCount++;
    $(".grid-container3").css("display", "none")
    if ($(".validationDefault03").val() !== "") {
        $(".grid-container2").css("display", "inline-grid")

        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();
        searchSpotifyNameClone();
    }




    $(".validationDefault03").val("")
    $(".track-list").empty()

})

$('.volume').on('change', function () {
    $('#preview-player').prop("volume", this.value);
});


var vid = document.getElementById("preview-player");

// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
vid.ontimeupdate = function () { myFunction() };

function myFunction() {
    console.log("current-time" + vid.currentTime)
    // Display the current position of the video in a p element with id="demo"
    document.getElementById("demo").innerHTML = vid.currentTime;
}


var vid = document.getElementById("preview-player");
vid.ontimeupdate = function () {
    var percentage = (vid.currentTime / vid.duration) * 100;
    $("#custom-seekbar span").css("width", percentage + "%");
};

$("#custom-seekbar").on("click", function (e) {
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#custom-seekbar").width();
    var percentage = (left / totalWidth);
    var vidTime = vid.duration * percentage;
    vid.currentTime = vidTime;
});//click()



//web audio api


var audioCtx = window.AudioContext || window.webkitAudioContext;
var audioContext, canvasContext;

var filters = [];

var analyser;
var width, height;
var dataArray, bufferLength;
var masterGain, stereoPanner;
var eqSwitch = 0

$("#stop-eq").on("click", function () {




})


$(".slider").on("click", function () {
    eqSwitch++;
    audioContext = new audioCtx()
    buildAudioGraph();

});

function buildAudioGraph() {
    var mediaElement = document.getElementById('preview-player');
    var sourceNode = audioContext.createMediaElementSource(mediaElement);

    // Create an analyser node
    analyser = audioContext.createAnalyser();

    // Try changing for lower values: 512, 256, 128, 64...
    analyser.fftSize = 512;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    // create the equalizer. It's a set of biquad Filters


    // Set filters
    [60, 170, 350, 1000, 3500, 10000].forEach(function (freq, i) {
        var eq = audioContext.createBiquadFilter();
        eq.frequency.value = freq;
        eq.type = "peaking";
        eq.gain.value = 0;
        filters.push(eq);
    });

    // Connect filters in serie
    sourceNode.connect(filters[0]);
    for (var i = 0; i < filters.length - 1; i++) {
        filters[i].connect(filters[i + 1]);
    }

    // Master volume is a gain node
    masterGain = audioContext.createGain();
    masterGain.value = 1;


    // connect the last filter to the speakers
    filters[filters.length - 1].connect(masterGain);

    // for stereo balancing, split the signal
    stereoPanner = audioContext.createStereoPanner();
    // connect master volume output to the panner
    masterGain.connect(stereoPanner);

    // Connect the stereo panner to analyser and analyser to destination
    stereoPanner.connect(analyser);
    analyser.connect(audioContext.destination);
}



function changeGain(sliderVal, nbFilter) {
    var value = parseFloat(sliderVal);
    filters[nbFilter].gain.value = value;

    // update output labels
    var output = document.querySelector("#gain" + nbFilter);
    output.value = value + " dB";


}







//dynamically generate holders for images and text