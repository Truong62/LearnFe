const marquee = document.getElementById("marqueeText");
const text = marquee.innerHTML;

marquee.innerHTML = text + text;

function moveMarquee() {
  if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
    marquee.scrollLeft = 0;
  } else {
    marquee.scrollLeft++;
  }
}

setInterval(moveMarquee, 20);
