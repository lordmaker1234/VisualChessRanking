function siteCheck() {
  if (document.URL.includes("lichess.org")) {
    document.getElementById("sitename").innerHTML = Lichess.org;
  } else if (document.URL.includes("chess.com")) {
    document.getElementById("sitename").innerHTML = Chess.com;
  } else {
    document.getElementById("currentlyPlaying").style.display = "none";
  }
}
