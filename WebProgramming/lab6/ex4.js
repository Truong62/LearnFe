var isStyleChanged = false;

function changeStyle() {
  var fonttext = document.getElementById("welcometext");

  if (isStyleChanged) {
    fonttext.style.fontSize = "";
    fonttext.style.color = "";
  } else {
    fonttext.style.fontSize = "35px";
    fonttext.style.color = "green";
  }
  isStyleChanged = !isStyleChanged;
}
