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

// let arr = ["a", "b"];

// arr.push(function () {
//   alert(this);
// });

// arr[2]();

// function sumInput() {
//   let inputdata = [];
//   while (true) {
//     let userIput = prompt("nhap gia tri: ");
//     if (userIput === null || userIput === "") {
//       break;
//     }
//     if ((userIput === 1, 2, 3, 4, 5, 6, 7, 8, 9)) {
//       inputdata.push(Number(userIput));
//     }
//   }
//   let sum = 0;
//   for (let number of inputdata) {
//     sum += number;
//   }
//   return sum;
// }

// let toral = sumInput();
// console.log("tong cua cac gia trij laf : " + toral);


function getMaxSubSum(arr) {
  let maxSum = 0; // Khởi tạo tổng lớn nhất ban đầu
  let currentSum = 0; // Khởi tạo tổng hiện tại ban đầu

  for (let item of arr) {
    // Tính tổng hiện tại bằng cách thêm phần tử tiếp theo vào nó
    currentSum += item;

    // Nếu tổng hiện tại trở nên nhỏ hơn 0, thì ta reset tổng hiện tại
    if (currentSum < 0) {
      currentSum = 0;
    }

    // So sánh tổng hiện tại với tổng lớn nhất, và cập nhật tổng lớn nhất nếu cần
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

// Sử dụng ví dụ
let arr = [1, -2, 3, 4, -9, 6];
let maxSubSum = getMaxSubSum(arr);
console.log("Tổng lớn nhất của mảng con liền kề là:", maxSubSum);


function camelize(str) {
  return str
    .split("-") // Tách chuỗi thành mảng các từ theo dấu gạch ngang
    .map((word, index) => {
      // Chuyển đổi các từ (trừ từ đầu tiên) thành dạng camel case
      if (index === 0) {
        return word; // Giữ nguyên từ đầu tiên
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join(""); // Kết hợp lại các từ thành chuỗi mới
}
console.log(camelize("background-color"))
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"))

function filterRange(arr, a, b){
  for(let item = a; a<=b;item++){
    arr.push(Number(item))
  }
  return arr
}
let arr_7 = [];
let filterrange = filterRange(arr_7,1, 10)
console.log(arr_7)