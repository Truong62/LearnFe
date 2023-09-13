//day1+2 - 29/7/2023
console.log("Welcome to 30DaysOfJavaScript");
let firstName = "nguyen van ngu";
console.log(firstName);
console.log(typeof "Asabeneh"); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined

const P3I = Math.PI;
console.log(Math.floor(P3I));

console.log(Math.min(-5, 3, 20, 4, 5, 10));
console.log(Math.max(-5, 3, 20, 4, 5, 10));

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

const num = Math.floor(Math.random() * 21); // creates random number between 0 and 10
console.log(num);

console.log(Math.LN10);
// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

let string = "   30 Days Of JavaScript   ";

console.log(string);
console.log(string.trim(" "));

let country = "Finland";
console.log(country.replace("Fin", "Noman"));

console.log(
  "==================================================================="
);

let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, 7));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));

// Tách chuỗi thành mảng bằng phương thức split()
// Tách chuỗi 30 Days Of JavaScript tại không gian bằng phương thức split()
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' chia chuỗi tại dấu phẩy và thay đổi nó thành một mảng.
// Thay đổi 30 Days Of JavaScript thành 30 Days Of Python bằng phương thức replace() .
// Ký tự ở chỉ mục 15 trong chuỗi '30 Days Of JavaScript' là gì? Sử dụng phương thức charAt() .
// Mã ký tự của J trong chuỗi '30 Days Of JavaScript' bằng charCodeAt() là gì
// Sử dụng indexOf để xác định vị trí xuất hiện đầu tiên của một trong 30 Days Of JavaScript
// Sử dụng lastIndexOf để xác định vị trí của lần xuất hiện cuối cùng trong 30 Days Of JavaScript.
// Sử dụng indexOf để tìm vị trí xuất hiện đầu tiên của từ vì trong câu sau: 'Bạn không thể kết thúc câu bằng vì vì vì vì là một liên từ'
// Sử dụng lastIndexOf để tìm vị trí xuất hiện cuối cùng của từ vì trong câu sau: 'Bạn không thể kết thúc câu bằng vì vì vì vì là một liên từ'
// Sử dụng tìm kiếm để tìm vị trí xuất hiện đầu tiên của từ vì trong câu sau: 'Bạn không thể kết thúc một câu với vì vì vì vì là một liên từ'
// Sử dụng trim() để xóa bất kỳ khoảng trắng ở cuối chuỗi nào ở đầu và cuối chuỗi. Ví dụ: ' 30 Days Of JavaScript '.
// Sử dụng phương thức startedWith() với chuỗi 30 Days Of JavaScript và biến kết quả thành true
// Sử dụng phương thức endWith() với chuỗi 30 Days Of JavaScript và biến kết quả thành true
// Sử dụng phương thức match() để tìm tất cả a trong 30 Days Of JavaScript
// Sử dụng concat() và hợp nhất '30 Days of' và 'JavaScript' thành một chuỗi duy nhất, '30 Days Of JavaScript'
// Sử dụng phương thức repeat() để in 30 Days Of JavaScript 2 lần
console.log(challenge.split());
console.log(challenge.split(" "));
s = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(s.split(", "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("3"));
console.log(challenge.lastIndexOf("t"));
// console.log(challenge.)

var Hello = function () {
  var nameten = document.getElementById("name").value;
  var output = "";

  for (var i = 0; i <= 10; i++) {
    var test = i + " Xin chào " + nameten + "<br>";
    output += test;
  }

  document.getElementById("name hello").innerHTML = output;
};

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

// function camelize(str) {
//   return str
//     .split("-") // Tách chuỗi thành mảng các từ theo dấu gạch ngang
//     .map((word, index) => {
//       // Chuyển đổi các từ (trừ từ đầu tiên) thành dạng camel case
//       if (index === 0) {
//         return word; // Giữ nguyên từ đầu tiên
//       } else {
//         return word[0].toUpperCase() + word.slice(1);
//       }
//     })
//     .join(""); // Kết hợp lại các từ thành chuỗi mới
// }
// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"))

// function filterRange(arr, a, b){
//   for(let item = a; a<=b;item++){
//     arr.push(Number(item))
//   }
//   return arr
// }
// let arr_7 = [];
// let filterrange = filterRange(arr_7,1, 10)
// console.log(arr_7)

var user = {};

user.name = "David";
user.surname = "Xuan";
user.name = "Cafedev";
console.log(user);
delete user.name;

function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}
// let schedule = {};

// alert( isEmpty(schedule) );

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) );

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let total = 0;
for (let key in salaries) {
  total += salaries[key];
}
salaries.total = total;
console.log(salaries.total);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      continue;
    } else if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}
let menu = {
  width: 200,
  height: 350,
  title: "My menu cafedev",
};

multiplyNumeric(menu);
console.log(menu);

var str =
  '{"company":"facebook","CEO":"Mark Zuckerberg","employees":[{"name": "John","age": 25},{"name": "Anna","age": 29}]}';

var obj = JSON.parse(str);

console.log(obj.company);
console.log(obj.employees[0].name); 
console.log(obj.employees[0].age); 
console.log(obj.employees[1].name); 


var  str = '{ "name" : "Code learn" , "age" : 2 }' ;

var obj = JSON.parse(str) ;
	
obj.name = "Google Chrome" ;	
obj.age = 12;

console.log(str); 


var text = '{ "name":"John", "birth":"1996-05-15", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});
console.log(obj.birth);

var obj = { name: "John", age: 29 };

var text = JSON.stringify(obj);

console.log(text);
var obj = { name: "John", today: new Date(), city: "New York" };
var myJSON = JSON.stringify(obj);
console.log(myJSON);

var obj = {
  name: "John",
  age: function () {
    return 30;
  },
  city: "New York",
};
var myJSON = JSON.stringify(obj);
console.log(myJSON);


var obj = {
  name: "John",
  age: function () {
    return 30;
  },
  city: "New York",
};
obj.age = obj.age.toString();
var myJSON = JSON.stringify(obj);
console.log(myJSON);


