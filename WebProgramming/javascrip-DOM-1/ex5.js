var click = document.getElementById("switchon");
var display = document.getElementById("myOpen");
var switchon = document.getElementById("switchon");
var switchof = document.getElementById("switchof");

click.onclick = function () {
  display.style.display = "block";
  switchon.style.display = "none";
  switchof.style.display = "block";
};

switchof.onclick = function () {
  switchof.style.display = "none";
  display.style.display = "none";
  switchon.style.display = "block";
};
