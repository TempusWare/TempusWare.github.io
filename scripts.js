function redirect(link) {
  window.location = link
}

// Initialize numbers in playlists
var playlistSequence = [0, 0]
function playlist(progression, player, playlist, sequencenum) {
  // Calculate the number in playlist when the button is clicked (e.g. add +1 to the current number)
  playlistSequence[sequencenum] += progression
  // If, after adding to the number when clicking on the button, the number is higher than the total number of videos in the playlist,
  // set the video to the first video in the playlist by resetting the number to 0
  if (playlistSequence[sequencenum] < 0) {
    playlistSequence[sequencenum] = playlist.length - 1
  }
  // If, after subtracting from the number when clicking on the button, the number is lower is 0,
  // set the number to the last video in the playlist by setting the number to the number of videos in the playlist (minus 1 cause computers start at 0)
  if (playlistSequence[sequencenum] > playlist.length - 1) {
    playlistSequence[sequencenum] = 0
  }
  // Send the embed link to the player
  return document.getElementById(player).src = "https://www.youtube.com/embed/" + playlist[playlistSequence[sequencenum]] + "?rel=0&amp;showinfo=0"
}

// Breaking the Wall: _qwaiBsY4HA
// Yellowbunbunz:     lqeSQJdAJGY
// WOR Compilation:   F7TcEixq-38
// Title Sequence:    2okdEjoWSvo
var playlistVideos = ["_qwaiBsY4HA", "lqeSQJdAJGY", "F7TcEixq-38", "2okdEjoWSvo"]

// Record Breaker:    GWAJt4vGD4M
// St Patrick's Day:  USNLLVZezGA
// Music Jam:         efT8DzCLqcs
// Medieval Party:    Ppcwgt6wGhk
var waddleonEpisodes = ["GWAJt4vGD4M", "USNLLVZezGA", "efT8DzCLqcs", "Ppcwgt6wGhk"]
