var button = document.querySelector("#searchbutton")

button.addEventListener('click', function (event) {
    event.preventDefault()
    fetch('https://itunes-api-proxy.glitch.me/search?term=johnny+cash&media=music&entity=musicTrack&trackID=251002253')
        .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        results = data.results
        console.log(results)
        console.log(results[0])
        console.log(results[0].previewUrl)
        console.log(results[0].trackName)
        console.log(results[0].artistName)
        document.getElementById('music-bar').src = results[0].previewUrl
        console.log(document.getElementById('music-bar').src)
        document.getElementById('audio-controls').load()
        console.log(document.getElementById('audio-controls'))        
        
    })
})


// console.log(results[0].previewUrl, results[0].trackName, results[0].artistName)
        // document.getElementById('#audiobar').src=results[0].previewUrl
        // document.getElementById('#songtitle').src=results[0].trackName
        // document.getElementById('#audiobar').src=results[0].artistName














/*
let results
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://itunes-api-proxy.glitch.me/lookup?amgArtistId=468749')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            results = data.results
            console.log(results)
        })
})












document.getElementById('#artist').innerText += results[i].artistName +', ';
document.getElementById('#song').innerText += results[i].trackName +', ';
document.getElementById('#album').innerText += results[i].collectionName +', ';






*/