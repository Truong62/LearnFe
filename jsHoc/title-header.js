const marqueeContent = document.querySelector(".marquee-content");

function updateMarquee() {
  marqueeContent.innerHTML += marqueeContent.innerHTML;
}

updateMarquee();
