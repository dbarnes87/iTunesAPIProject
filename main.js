const searchbutton = document.querySelector("#searchbutton")
const searchBar = document.querySelector("#searchbar");
const player = document.querySelector("#audio-controls");
const music = document.querySelector('#music-bar')
const playbutton = q("#playback")
let playing = q('.playing')


function q (sel) {
    return document.querySelector(sel)
  }

function qs (sel) {
    return document.querySelectorAll(sel)
  }

function artistNode (artist) {
    const artistDiv = document.createElement('div')
    artistDiv.classList
    artistDiv.innerHTML = `
    <div class='artist-results'>
      <img src="${artist.artworkUrl100}" class="artist-image">
      <h3>${artist.artistName}</h3>
      <p class='track'>Song: ${artist.trackName}</p>
      <input data-track="${artist.trackName}" class="playback" id="playback" type="button" src="${artist.previewUrl}" value="Play">
    </div>`
    return artistDiv
  }

/*
function songNode (artist) {
    const songDiv = document.createElement('div')
    artistDiv.classList
    artistDiv.innerHTML = `
    <div class='artist-results'>
    <p class='track'>Now Playing: ${artist.trackName} by ${artist.trackName}NewNode</p></div>`

    return songDiv
}
*/


searchbutton.addEventListener('click', function (event) {
    event.preventDefault()
    let searchTerm = document.querySelector('#bar').value
    let url = `https://itunes-api-proxy.glitch.me/search?term=${encodeURIComponent(searchTerm)}&&entity=song`
    const resultsDiv = document.querySelector('#artist-results')

    fetch(url)
        .then(response => response.json())
        .then(function(data) {
            resultsDiv.innerHTML = ''
            results = data.results
            for (let artist of results) {
                resultsDiv.appendChild(artistNode(artist))
            }
        })
})

/*
playbutton.addEventListener('click', function(event) {
    const resultsDiv = document.querySelector('#artist-results')
    let results = data.results
    for (let artist of results) {
        resultsDiv.appendChild(songNode(artist))
    }
})
*/

q('#artist-results').addEventListener('click', function(event) {
    if (event.target && event.target.matches('#playback')) {
        music.src = event.target.src
        player.load()
        player.play()
        let newEl = document.createElement('p')
        newEl.classList.add('playing')
        newEl.innerHTML = event.target.dataset['track']
        playing.parentNode.replaceChild(newEl, playing)
        playing = q('.playing')
    }
})

























// function displayArtistData (planetUrl) {
//     fetch(planetUrl)
//       .then(res => res.json())
//       .then(function (data) {
//         const dataDisplay = q('#artist-data')
//         dataDisplay.innerHTML = `
//           <h3>More info about ${results.artistName}</h3>
//           <dl>
//             <dt>Artist</dt>
//             <dd>${results.artistName}</dd>
//           </dl>
//         `
//       })
//   }




// .then(function (data) {
//     results = data.results
//     document.getElementById('music-bar').src = results[0].previewUrl
//     document.getElementById('audio-controls').load()






// console.log(results[0].previewUrl, results[0].trackName, results[0].artistName)
        // document.getElementById('#audiobar').src=results[0].previewUrl
        // document.getElementById('#songtitle').src=results[0].trackName
        // document.getElementById('#audiobar').src=results[0].artistName



        // const applyFilter = document.querySelector("#filter");
        // const enterButton = document.querySelector("#doSearch");
        // const resultArea = document.querySelector("#resultArea");
        // const spinner = document.querySelector('#spinner');










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