// const marquee = document.getElementById("marqueeText");
// const text = marquee.innerHTML;

// marquee.innerHTML = text + text;

// function moveMarquee() {
//   if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
//     marquee.scrollLeft = 0;
//   } else {
//     marquee.scrollLeft++;
//   }
// }

// setInterval(moveMarquee, 20);

var info = {
  name: "nguyen van a",
  age: 18,
};

for (var item of Object.values(info)) {
  console.log(item.length);
}

var khoaHoc = [
  {
    id: 1,
    name: "a",
    coin: 400,
  },
  {
    id: 2,
    name: "b",
    coin: 400,
  },
  ,
  {
    id: 3,
    name: "b",
    coin: 400,
  },
  ,
  {
    id: 4,
    name: "d",
    coin: 0,
  },
];

var checkFree = khoaHoc.every(function (KHOAHOC, index) {
  return KHOAHOC.coin >= 0;
});

console.log(checkFree);

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
let haha = "10";

let styles = ["jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2]();