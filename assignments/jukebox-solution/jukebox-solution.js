function Jukebox() {
  var _this = this

  SC.initialize({
    client_id: "ebe2d1362a92fc057ac484fcfb265049"
  })

  // resolves information regarding the soundcloud track
  SC.resolve("https://soundcloud.com/doornrecords/ftampa-the-fish-house-031-original-mix-available-august-3").then(function(result){
    _this.username = result.user.username
    _this.usernameUrl  = result.user.permalink_url
    _this.trackUrl = result.permalink_url
    _this.trackTitle = result.title
    _this.trackArtworkUrl = result.artwork_url
    _this.trackDescription = result.description
    _this.trackGenre = result.genre

    // store the stream promise object for later
    _this.trackStream = SC.stream("/tracks/" + result.id)
  })
}

Jukebox.prototype.play = function() {
  this.trackStream.then(function(player) {
    player.play()
  })
}

Jukebox.prototype.pause = function() {
  this.trackStream.then(function(player) {
    player.pause()
  })
}

document.addEventListener("DOMContentLoaded", function() {
  var jukebox = new Jukebox()

  document.querySelector(".play").addEventListener("click", function() {
    jukebox.play()

    document.querySelector(".username").href = jukebox.usernameUrl
    document.querySelector(".username").innerText = jukebox.username
    document.querySelector(".track").href = jukebox.trackUrl
    document.querySelector(".track").innerText = jukebox.trackTitle
    document.querySelector(".artwork").src = jukebox.trackArtworkUrl
    document.querySelector(".description").innerText = jukebox.trackDescription
    document.querySelector(".genre").innerText = jukebox.trackGenre
  })

  document.querySelector(".pause").addEventListener("click", function() {
    jukebox.pause()
  })
})