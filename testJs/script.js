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

var str = '{ "name" : "Code learn" , "age" : 2 }';

var obj = JSON.parse(str);

obj.name = "Google Chrome";
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

// onclick	Sự kiện xảy ra khi người dùng click chuột vào phần tử
// ondblclick	Sự kiện xảy ra khi người dùng click kép chuột vào phần tử
// onmouseenter	Sự kiện xảy ra khi người dùng di chuyển con trỏ vào phần tử
// onmouseleave	Sự kiện xảy ra khi người dùng di chuyển con trỏ ra khỏi phần tử.
// onkeydown	Sự kiện xảy ra khi người dùng đang nhấn một phím
// onkeyup	Sự kiện xảy ra khi người dùng nhả phím ra
// oncopy	Sự kiện xảy ra khi người dùng sao chép nội dung của phần tử
// oncut	Sự kiện xảy ra khi người dùng cắt nội dung của phần tử
// onpaste	Sự kiện xảy ra khi người dùng dán nội dung vào phần tử
// onchange	Sự kiện xảy ra khi người dùng thay đổi giá trị của phần tử

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
let c = [...a, ...b];
const countries = ["Finland", "Sweden", "Norway"];

const BoTrongNull = new Set();
console.log(BoTrongNull);
for (let a = 0; a <= 10; a++) {
  BoTrongNull.add(a);
}
console.log(BoTrongNull);

BoTrongNull.delete(4);
console.log(BoTrongNull);
BoTrongNull.clear();
console.log(BoTrongNull);

const languages1 = ["English", "Finnish", "English", "French", "Spanish"];
console.log(languages1);
console.log(c);

const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;

const usersObj = JSON.parse(usersText, undefined, 4);


const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

const chaegrday16 = JSON.parse(txt);
console.log(chaegrday16)
// JSON.stringify(txt,undefined,4)
const txtjson = JSON.stringify(chaegrday16, ["Thomas"], 4);
console.log(txtjson);

const dog={}
console.log(dog)

for(let i = 0;i<=10;i++){
  let line =' '
  for(let j = 0; j<=i;j++){
     line += '*'
  }
  console.log(line)
}