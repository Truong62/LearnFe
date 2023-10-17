var playPauseButton = document.getElementById("play-pause");
var video = document.querySelector("video");
var bigg = document.getElementById("Big");
var small = document.getElementById("Small");
var normall = document.getElementById("normal");

playPauseButton.onclick = function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
bigg.onclick = function () {
  video.style.width = "720px";
  video.style.height = "480px";
};
small.onclick = function () {
  video.style.width = "480px";
  video.style.height = "360px";
};
normall.onclick = function () {
  video.style.width = "320px";
  video.style.height = "240px";
};
