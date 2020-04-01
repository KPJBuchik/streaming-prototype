const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token = hash.access_token;

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'b6ce36d62a8246c1b73f73fa4d28cfb5';
const redirectUri = 'https://kpjbuchik.github.io/streaming-prototype/';
const scopes = [
  'user-top-read'
];

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
}

var count = 0


//get user image



    $.ajax({
        url: "https://api.spotify.com/v1/me/",
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token );},
        success: function(response) { 
        $(".user-name").text(response.display_name)
        $(".user-image").attr("src", response.images[0].url)
        } 
    });





//ajax call to populate sidebar with playlists
function getPlaylists() {


    var accessToken = "BQCWWu_xyzxMv8guVISoGX29QlDqMgKW3FnYN2iJLcBa3kYoD3VajsdWomtOR1iejAcnRQolGiyMVxGiKCG_m5MqulxL1yDXmBB-c1a6i5P7_PfG11-4cmukz538SWC7LfUWacoACslF"
    var queryUrl = "https://api.spotify.com/v1/me/playlists"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {
        console.log
        $("ul").text(response.items[0].name)
        $("ul").attr("value", response.items[0].id)

        $("ul:nth-child(2)").text(response.items[1].name)
        $("ul:nth-child(2)").attr("value", response.items[1].id)

        $("ul:nth-child(3)").text(response.items[2].name)
        $("ul:nth-child(3)").attr("value", response.items[2].id)

        $("ul:nth-child(4)").text(response.items[3].name)
        $("ul:nth-child(4)").attr("value", response.items[3].id)

        $("ul:nth-child(5)").text(response.items[4].name)
        $("ul:nth-child(5)").attr("value", response.items[4].id)

        $("ul:nth-child(6)").text(response.items[5].name)
        $("ul:nth-child(6)").attr("value", response.items[5].id)

        $("ul:nth-child(7)").text(response.items[6].name)
        $("ul:nth-child(7)").attr("value", response.items[6].id)

        $("ul:nth-child(8)").text(response.items[7].name)
        $("ul:nth-child(8)").attr("value", response.items[7].id)

        $("ul:nth-child(9)").text(response.items[8].name)
        $("ul:nth-child(9)").attr("value", response.items[8].id)

        $("ul:nth-child(10)").text(response.items[9].name)
        $("ul:nth-child(10)").attr("value", response.items[9].id)

        $("ul:nth-child(11)").text(response.items[10].name)
        $("ul:nth-child(11)").attr("value", response.items[10].id)

        $("ul:nth-child(12)").text(response.items[11].name)
        $("ul:nth-child(12)").attr("value", response.items[11].id)

        $("ul:nth-child(13)").text(response.items[12].name)
        $("ul:nth-child(13)").attr("value", response.items[12].id)

        $("ul:nth-child(14)").text(response.items[13].name)
        $("ul:nth-child(14)").attr("value", response.items[13].id)

        $("ul:nth-child(15)").text(response.items[14].name)
        $("ul:nth-child(15)").attr("value", response.items[14].id)

        $("ul:nth-child(16)").text(response.items[15].name)
        $("ul:nth-child(16)").attr("value", response.items[15].id)

        $("ul:nth-child(17)").text(response.items[16].name)
        $("ul:nth-child(17)").attr("value", response.items[16].id)

        $("ul:nth-child(18)").text(response.items[17].name)
        $("ul:nth-child(18)").attr("value", response.items[17].id)

        $("ul:nth-child(19)").text(response.items[18].name)
        $("ul:nth-child(19)").attr("value", response.items[18].id)


        console.log(response.items.name)

    });
}



function getPlaylistTracks() {

    $("ul").click(function () {

        var playlistId = $(this).attr("value")


        var accessToken = "BQCWWu_xyzxMv8guVISoGX29QlDqMgKW3FnYN2iJLcBa3kYoD3VajsdWomtOR1iejAcnRQolGiyMVxGiKCG_m5MqulxL1yDXmBB-c1a6i5P7_PfG11-4cmukz538SWC7LfUWacoACslF"
        var queryUrl = "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks"

        $.ajax({
            url: queryUrl,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.items.length; i++) {
                let newTime = timeConversion(response.items[i].track.duration_ms)
                let results = response.items[i].track.name
                let tracklistDiv = $("<div>")
                tracklistDisplay = $("<p>").text(results + "-" + response.items[i].track.artists[0].name + " " + newTime).addClass("track")
                let trackHr = $("<hr>")
                tracklistDiv.html(tracklistDisplay)
                $(".track-list").append(tracklistDiv)
                $(".track-list").append(trackHr)
                $(".track-list").click(function () {
                    event.preventDefault();
                    for (i = 0; i < response.items.length; i++) {
                        $("#preview-player").attr("src", response.items[i].track.preview_url)
                        $(".album-cover").attr("src", response.items[i].track.album.images[0].url)


                    }
                })


            }
        })

    });
}


//uhhhhh



$(document).ready(function () {
    console.log("ready")
    getPlaylists();
    getUserProfile()
});

//get artists top tracks and album covers
function searchSpotify(id) {

    var accessToken = "BQCWWu_xyzxMv8guVISoGX29QlDqMgKW3FnYN2iJLcBa3kYoD3VajsdWomtOR1iejAcnRQolGiyMVxGiKCG_m5MqulxL1yDXmBB-c1a6i5P7_PfG11-4cmukz538SWC7LfUWacoACslF"
    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/top-tracks?country=us"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {

        console.log(response)
        for (var i = 0; i < response.tracks.length; i++) {
            var newTime = timeConversion(response.tracks[i].duration_ms)
        }
        var newtime
        $(".popular-songs1").html("1" + " " + response.tracks[0].name)
        $(".popular-songs2").text("2" + " " + response.tracks[1].name)
        $(".popular-songs3").text("3" + " " + response.tracks[2].name)
        $(".popular-songs4").text("4" + " " + response.tracks[3].name)
        $(".popular-songs5").text("5" + " " + response.tracks[4].name)

        $(".timez").html(newTime)

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

    var accessToken = "BQCWWu_xyzxMv8guVISoGX29QlDqMgKW3FnYN2iJLcBa3kYoD3VajsdWomtOR1iejAcnRQolGiyMVxGiKCG_m5MqulxL1yDXmBB-c1a6i5P7_PfG11-4cmukz538SWC7LfUWacoACslF"
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
    var accessToken = "BQCWWu_xyzxMv8guVISoGX29QlDqMgKW3FnYN2iJLcBa3kYoD3VajsdWomtOR1iejAcnRQolGiyMVxGiKCG_m5MqulxL1yDXmBB-c1a6i5P7_PfG11-4cmukz538SWC7LfUWacoACslF"
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


    var accessToken = "BQCWWu_xyzxMv8guVISoGX29QlDqMgKW3FnYN2iJLcBa3kYoD3VajsdWomtOR1iejAcnRQolGiyMVxGiKCG_m5MqulxL1yDXmBB-c1a6i5P7_PfG11-4cmukz538SWC7LfUWacoACslF"
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



        var releaseDate = (response.items[0].release_date);
        var releaseYear = releaseDate.split("-");


        $(".top-albums").on("click", function (event) {
            event.preventDefault()
            console.log(response.items[0].name)
            //BIG BUG 
            //goddamnit 
            for (var i = 0; i < response.items.length; i++) {

                $(".album-cover-page").attr("src", response.items[i].images[0].url)
                $(".album-page-name").text(response.items[i].name)
                $(".by-artist-album").text("by " + response.items[i].artists[0].name)
                $(".release-date").text(releaseYear[0] + "-" + response.items[i].total_tracks + " Tracks")
                $(".more-albums").attr("src", response.items[i].images[0].url)
                $(".more-albums:nth-child(2)").attr("src", response.items[1].images[0].url)
                $(".more-albums:nth-child(3)").attr("src", response.items[2].images[0].url)
                $(".more-albums:nth-child(4)").attr("src", response.items[3].images[0].url)
                $(".more-albums:nth-child(5)").attr("src", response.items[4].images[0].url)
                $(".more-albums:nth-child(6)").attr("src", response.items[5].images[0].url)


            }


        })

        $(".track-list").on("click", function (event) {
            event.preventDefault();
            console.log("uhhello")
            $(".album-cover").attr("src", response.items[0].images[0].url)


        })
        console.log(response.items[0].images[0].url)
        console.log(response)


    })


}

function getAlbumTracklist() {

    var albumId = $(".image-results").attr("value");
    var accessToken = "BQCWWu_xyzxMv8guVISoGX29QlDqMgKW3FnYN2iJLcBa3kYoD3VajsdWomtOR1iejAcnRQolGiyMVxGiKCG_m5MqulxL1yDXmBB-c1a6i5P7_PfG11-4cmukz538SWC7LfUWacoACslF"
    var queryUrl = "https://api.spotify.com/v1/albums/" + albumId + "/tracks"

    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }).then(function (response) {

        console.log(response)
        console.log(albumId)
        for (var i = 0; i < response.items.length; i++) {
            let results = response.items[i].name
            let tracklistDiv = $("<div>")
            tracklistDisplay = $("<p>").text(results).addClass("track")
            let trackHr = $("<hr>")
            tracklistDiv.html(tracklistDisplay)
            $(".track-list").append(tracklistDiv)
            $(".track-list").append(trackHr)

        }


        //try to get this to work

        $(".track").on("click", function (event) {
            event.preventDefault();
            for (var i = 0; i < response.items.length; i++) {
                $("#preview-player").attr("src", response.items[i].preview_url)

                $(".now-playing-song").text(response.items[i].name)

                $(".now-playing-artist").text(response.items[i].artists[0].name)

                console.log("working")
            }
        })



        //     $("li:nth-child(1)").text(response.items[0].name)

        //     $("li:nth-child(2)").text(response.items[1].name)
        //     $("li:nth-child(3)").text(response.items[2].name)
        //     $("li:nth-child(5n+2)").text(response.items[3].name)
        //     $("li:nth-child(5)").text(response.items[4].name)
        //     $("li:nth-child(6)").text(response.items[5].name)



    })



}



//get artists related artists
function searchRelatedArtists(id) {

    var accessToken = "BQCWWu_xyzxMv8guVISoGX29QlDqMgKW3FnYN2iJLcBa3kYoD3VajsdWomtOR1iejAcnRQolGiyMVxGiKCG_m5MqulxL1yDXmBB-c1a6i5P7_PfG11-4cmukz538SWC7LfUWacoACslF"
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


})

$(".image-results").on("click", function (event) {
    event.preventDefault();
    getAlbumTracklist();
    $(".grid-container3").css("display", "inline-grid")

})

$(".browse").on("click", function (event) {
    event.preventDefault();
    $(".grid-container").css("display", "inline-grid")
    $(".grid-container3").css("display", "none")
    $(".grid-container2").css("display", "none")


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