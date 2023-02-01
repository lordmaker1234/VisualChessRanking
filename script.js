document.getElementById("refreshButton").addEventListener("click", siteCheck);
chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  // use `url` here inside the callback because it's asynchronous!
});

function siteCheck() {
  if (/lichess.org/.test(url)) {
    //Unable to get the script to properly detect the page
    document.getElementById("sitename").innerHTML = "Lichess.org";
  } else if (/chess.com/.test(url)) {
    document.getElementById("sitename").innerHTML = "Chess.com";
  } else {
    document.getElementById("currentlyPlaying").style.display = "none";
  }
}
