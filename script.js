document.getElementById("refreshButton").addEventListener("click", siteCheck);

function siteCheck() {
  if (/lichess.org/.test(window.location.href)) {
    document.getElementById("sitename").innerHTML = Lichess.org;
  } else if (/chess.com/.test(window.location.href)) {
    document.getElementById("sitename").innerHTML = Chess.com;
  } else {
    document.getElementById("currentlyPlaying").style.display = "none";
  }
}
