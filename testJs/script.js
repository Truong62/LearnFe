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

for (let i = 0; i <= 10; i++) {
  let line = " ";
  for (let j = 0; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

// JSON.stringify(txt,undefined,4)
// const txtjson = JSON.stringify(chaegrday16, ["Thomas"], 4);
// console.log(txtjson);

const dog = {};
console.log(dog);

dog.name;
dog.legs;
dog.color;
dog.age;
dog.bark_property = "woof woof";

const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);

const userday13 = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(userday13);

const countriesday13 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countriesday13.length; i++) {
  console.log(countriesday13[i][0], countriesday13[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countriesday13) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countriesday13.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");

const namesday13 = ["Asabeneh", "Brook", "David", "John"];
const countrie13 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user13 = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users13 = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(namesday13);
console.groupEnd();

console.group("Countries");
console.log(countrie13);
console.groupEnd();

console.group("Users");
console.log(user13);
console.log(users13);
console.groupEnd();

console.clear();
console.table(user13);
console.table({ name: user13.name, title: user13.title });

console.group("Địa chỉ");
console.log("Quốc gia:", user13.country);
console.log("Thành phố:", user13.city);
console.groupEnd();

console.assert(10 > 2 * 10, "sai");
console.warn("canh bao");
console.error("error");

const array = Array.from({ length: 1000000 }, (_, i) => i);

console.time("while");
let i = 0;
while (i < array.length) {
  i++;
}
console.timeEnd("while");

console.time("for");
for (let i = 0; i < array.length; i++) {}
console.timeEnd("for");

console.time("forEach");
array.forEach((item) => {});
console.timeEnd("forEach");

console.clear();

//day 14

try {
  let lastName = "Yetayeh";
  let fullName14 = fistName + " " + lastName;
} catch (err) {
  console.error(err);
} finally {
  console.log("In any case I will be executed");
}

console.clear();

//day 15

class Zoo {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}
class Dog extends Zoo {
  constructor(name, age, color) {
    super(name, age, color);
  }
}

const myDog = new Dog("Buddy", 3, "Nâu", "Golden Retriever");
console.log(myDog);

console.clear();

// //day 16

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
const txtJSON = JSON.stringify(skills);

console.log(txtJSON);
const data16 = JSON.parse(txt);
for (const key in data16) {
  if (data16.hasOwnProperty(key)) {
    const ageUser16 = data16[key].age;
    console.log(ageUser16);
  }
}

const studentSubset = {
  firstName: student.firstName,
  lastName: student.lastName,
  skills: student.skills,
};
const studentJSON = JSON.stringify(studentSubset);

console.log(studentJSON);

console.log(JSON.parse(studentJSON));

const data = JSON.parse(txt);
console.log(data);

//17
localStorage.setItem("key", "value");
console.log(localStorage);

localStorage.setItem("age", 200);
console.log(localStorage);

localStorage.setItem("firstName", "John");
localStorage.setItem("lastName", "Doe");
localStorage.setItem("age", "30");
localStorage.setItem("country", "USA");
localStorage.setItem("city", "New York");

const firstName17 = localStorage.getItem("firstName");
console.log(firstName17);

const Sv17 = {
  name: "nug",
  ho: "nguyen",
  tuoi: "16",
  skill: "hacker",
};

const SvToJSON = JSON.stringify(Sv17);
localStorage.setItem("SvToJSON", SvToJSON);

console.log(JSON.parse(localStorage.getItem("SvToJSON")).name);
console.log(JSON.parse(localStorage.getItem("SvToJSON")).tuoi);
console.log(JSON.parse(localStorage.getItem("SvToJSON")).skill);

const userAccount17 = {
  name: "",
};

//day18
//Callback
// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     callback("It did not go well", skills);
//   }, 2000);
// };

// const callback = (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// };

// doSomething(callback);

// doSomething((err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// });

// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     if (skills.length > 0) {
//       resolve(skills);
//     } else {
//       reject("Something wrong has happened");
//     }
//   }, 2000);
// });

// doPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error));

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// fetch(countriesAPI)
//   .then((DocAPItoJSON) => DocAPItoJSON.json())
//   .then((data) => {
//     data.forEach((country) => {
//       const name = country.name;
//       const capital = country.capital;
//       const languages = country.languages
//         .map((language) => language.name)
//         .join(", ");
//       const population = country.population;
//       const area = country.area;

//       console.log("Country:", name);
//       console.log("Capital:", capital);
//       console.log("Languages:", languages);
//       console.log("Population:", population);
//       console.log("Area:", area);
//       console.log("------------------------");
//     });
// })
let catNames = [];

// fetch(catsAPI)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((cat) => {
//       catNames.push(cat.name);
//     });
//     console.log("Cat Names:", JSON.parse(catNames));
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });
console.clear();

//day19
function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}
const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

function outerFunction1() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs = outerFunction1();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);

function off() {
  let outerVar = "Tôi Test Thử...";
  function off2() {
    console.log(outerVar);
  }
  return outerVar;
}
console.log(off());

function barChucNang() {
  function cn1() {
    console.log("Chức năng 1");
  }
  function cn2() {
    console.log("Chức năng 2");
  }
  function cn3() {
    console.log("Chức năng 3");
  }
  return {
    function1: cn1,
    function2: cn2,
    function3: cn3,
  };
}
const inrachucnang = barChucNang();
inrachucnang.function1();
inrachucnang.function2();
inrachucnang.function3();

function PersonAccount(firstName, lastName, income, expenses) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.income = income || [];
  this.expenses = expenses || [];

  this.totalIncome = function () {
    return this.income.reduce((total, income) => total + income.amount, 0);
  };

  this.totalExpense = function () {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  this.accountInfo = function () {
    return `Tên: ${this.firstName} ${
      this.lastName
    }, Thu nhập: ${this.totalIncome()}, Chi phí: ${this.totalExpense()}`;
  };

  this.addIncome = function (description, amount) {
    this.income.push({ description, amount });
  };

  this.addExpense = function (description, amount) {
    this.expenses.push({ description, amount });
  };

  this.accountBalance = function () {
    return this.totalIncome() - this.totalExpense();
  };
}

const myAccount = new PersonAccount(
  "John",
  "Doe",
  [{ description: "Lương", amount: 5000 }],
  [{ description: "Mua sắm", amount: 1000 }]
);

// Thêm một khoản thu nhập mới
myAccount.addIncome("Thưởng", 1000);
myAccount.addExpense("Hóa đơn điện", 200);
console.log(myAccount.accountInfo());
console.log(`Số dư tài khoản: ${myAccount.accountBalance()}`);

// console.log("Welcome to 30DaysOfJavaScript");
// let firstName = "nguyen van ngu";
// console.log(firstName);
// console.log(typeof "Asabeneh"); // string
// console.log(typeof 5); // number
// console.log(typeof true); // boolean
// console.log(typeof null); // object type
// console.log(typeof undefined); // undefined

// const P3I = Math.PI;
// console.log(Math.floor(P3I));

// console.log(Math.min(-5, 3, 20, 4, 5, 10));
// console.log(Math.max(-5, 3, 20, 4, 5, 10));

// const randNum = Math.random(); // creates random number between 0 to 0.999999
// console.log(randNum);

// const num = Math.floor(Math.random() * 21); // creates random number between 0 and 10
// console.log(num);

// console.log(Math.LN10);
// // Trigonometry
// Math.sin(0);
// Math.sin(60);

// Math.cos(0);
// Math.cos(60);

// let string = "   30 Days Of JavaScript   ";

// console.log(string);
// console.log(string.trim(" "));

// let country = "Finland";
// console.log(country.replace("Fin", "Noman"));

// console.log(
//   "==================================================================="
// );

// let challenge = "30 Days Of JavaScript";
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(3, 7));
// console.log(challenge.substring(3));
// console.log(challenge.includes("Script"));

// // Tách chuỗi thành mảng bằng phương thức split()
// // Tách chuỗi 30 Days Of JavaScript tại không gian bằng phương thức split()
// // 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' chia chuỗi tại dấu phẩy và thay đổi nó thành một mảng.
// // Thay đổi 30 Days Of JavaScript thành 30 Days Of Python bằng phương thức replace() .
// // Ký tự ở chỉ mục 15 trong chuỗi '30 Days Of JavaScript' là gì? Sử dụng phương thức charAt() .
// // Mã ký tự của J trong chuỗi '30 Days Of JavaScript' bằng charCodeAt() là gì
// // Sử dụng indexOf để xác định vị trí xuất hiện đầu tiên của một trong 30 Days Of JavaScript
// // Sử dụng lastIndexOf để xác định vị trí của lần xuất hiện cuối cùng trong 30 Days Of JavaScript.
// // Sử dụng indexOf để tìm vị trí xuất hiện đầu tiên của từ vì trong câu sau: 'Bạn không thể kết thúc câu bằng vì vì vì vì là một liên từ'
// // Sử dụng lastIndexOf để tìm vị trí xuất hiện cuối cùng của từ vì trong câu sau: 'Bạn không thể kết thúc câu bằng vì vì vì vì là một liên từ'
// // Sử dụng tìm kiếm để tìm vị trí xuất hiện đầu tiên của từ vì trong câu sau: 'Bạn không thể kết thúc một câu với vì vì vì vì là một liên từ'
// // Sử dụng trim() để xóa bất kỳ khoảng trắng ở cuối chuỗi nào ở đầu và cuối chuỗi. Ví dụ: ' 30 Days Of JavaScript '.
// // Sử dụng phương thức startedWith() với chuỗi 30 Days Of JavaScript và biến kết quả thành true
// // Sử dụng phương thức endWith() với chuỗi 30 Days Of JavaScript và biến kết quả thành true
// // Sử dụng phương thức match() để tìm tất cả a trong 30 Days Of JavaScript
// // Sử dụng concat() và hợp nhất '30 Days of' và 'JavaScript' thành một chuỗi duy nhất, '30 Days Of JavaScript'
// // Sử dụng phương thức repeat() để in 30 Days Of JavaScript 2 lần
// console.log(challenge.split());
// console.log(challenge.split(" "));
// s = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(s.split(", "));
// console.log(challenge.replace("JavaScript", "Python"));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt(11));
// console.log(challenge.indexOf("3"));
// console.log(challenge.lastIndexOf("t"));
// // console.log(challenge.)

// var Hello = function () {
//   var nameten = document.getElementById("name").value;
//   var output = "";

//   for (var i = 0; i <= 10; i++) {
//     var test = i + " Xin chào " + nameten + "<br>";
//     output += test;
//   }

//   document.getElementById("name hello").innerHTML = output;
// };

// // const marquee = document.getElementById("marqueeText");
// // const text = marquee.innerHTML;

// // marquee.innerHTML = text + text;

// // function moveMarquee() {
// //   if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
// //     marquee.scrollLeft = 0;
// //   } else {
// //     marquee.scrollLeft++;
// //   }
// // }

// // setInterval(moveMarquee, 20);

// var info = {
//   name: "nguyen van a",
//   age: 18,
// };

// for (var item of Object.values(info)) {
//   console.log(item.length);
// }

// var khoaHoc = [
//   {
//     id: 1,
//     name: "a",
//     coin: 400,
//   },
//   {
//     id: 2,
//     name: "b",
//     coin: 400,
//   },
//   ,
//   {
//     id: 3,
//     name: "b",
//     coin: 400,
//   },
//   ,
//   {
//     id: 4,
//     name: "d",
//     coin: 0,
//   },
// ];

// var checkFree = khoaHoc.every(function (KHOAHOC, index) {
//   return KHOAHOC.coin >= 0;
// });

// console.log(checkFree);

// console.log(
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// );
// console.log(
//   "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// );
// let haha = "10";

// let styles = ["jazz", "Blues"];
// console.log(styles);
// styles.push("Rock-n-Roll");
// console.log(styles);
// const middleIndex = Math.floor(styles.length / 2);
// styles[middleIndex] = "Classics";
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Rap", "Reggae");
// console.log(styles);

// // let arr = ["a", "b"];

// // arr.push(function () {
// //   alert(this);
// // });

// // arr[2]();

// // function sumInput() {
// //   let inputdata = [];
// //   while (true) {
// //     let userIput = prompt("nhap gia tri: ");
// //     if (userIput === null || userIput === "") {
// //       break;
// //     }
// //     if ((userIput === 1, 2, 3, 4, 5, 6, 7, 8, 9)) {
// //       inputdata.push(Number(userIput));
// //     }
// //   }
// //   let sum = 0;
// //   for (let number of inputdata) {
// //     sum += number;
// //   }
// //   return sum;
// // }

// // let toral = sumInput();
// // console.log("tong cua cac gia trij laf : " + toral);

// function getMaxSubSum(arr) {
//   let maxSum = 0; // Khởi tạo tổng lớn nhất ban đầu
//   let currentSum = 0; // Khởi tạo tổng hiện tại ban đầu

//   for (let item of arr) {
//     // Tính tổng hiện tại bằng cách thêm phần tử tiếp theo vào nó
//     currentSum += item;

//     // Nếu tổng hiện tại trở nên nhỏ hơn 0, thì ta reset tổng hiện tại
//     if (currentSum < 0) {
//       currentSum = 0;
//     }

//     // So sánh tổng hiện tại với tổng lớn nhất, và cập nhật tổng lớn nhất nếu cần
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }

//   return maxSum;
// }

// // Sử dụng ví dụ
// let arr = [1, -2, 3, 4, -9, 6];
// let maxSubSum = getMaxSubSum(arr);
// console.log("Tổng lớn nhất của mảng con liền kề là:", maxSubSum);

// // function camelize(str) {
// //   return str
// //     .split("-") // Tách chuỗi thành mảng các từ theo dấu gạch ngang
// //     .map((word, index) => {
// //       // Chuyển đổi các từ (trừ từ đầu tiên) thành dạng camel case
// //       if (index === 0) {
// //         return word; // Giữ nguyên từ đầu tiên
// //       } else {
// //         return word[0].toUpperCase() + word.slice(1);
// //       }
// //     })
// //     .join(""); // Kết hợp lại các từ thành chuỗi mới
// // }
// // console.log(camelize("background-color"))
// // console.log(camelize("list-style-image"));
// // console.log(camelize("-webkit-transition"))

// // function filterRange(arr, a, b){
// //   for(let item = a; a<=b;item++){
// //     arr.push(Number(item))
// //   }
// //   return arr
// // }
// // let arr_7 = [];
// // let filterrange = filterRange(arr_7,1, 10)
// // console.log(arr_7)

// var user = {};

// user.name = "David";
// user.surname = "Xuan";
// user.name = "Cafedev";
// console.log(user);
// delete user.name;

// function isEmpty(obj) {
//   if (Object.keys(obj).length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // let schedule = {};

// // alert( isEmpty(schedule) );

// // schedule["8:30"] = "get up";

// // alert( isEmpty(schedule) );

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let total = 0;
// for (let key in salaries) {
//   total += salaries[key];
// }
// salaries.total = total;
// console.log(salaries.total);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       continue;
//     } else if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
// }
// let menu = {
//   width: 200,
//   height: 350,
//   title: "My menu cafedev",
// };

// multiplyNumeric(menu);
// console.log(menu);

// var str =
//   '{"company":"facebook","CEO":"Mark Zuckerberg","employees":[{"name": "John","age": 25},{"name": "Anna","age": 29}]}';

// var obj = JSON.parse(str);

// console.log(obj.company);
// console.log(obj.employees[0].name);
// console.log(obj.employees[0].age);
// console.log(obj.employees[1].name);

// var str = '{ "name" : "Code learn" , "age" : 2 }';

// var obj = JSON.parse(str);

// obj.name = "Google Chrome";
// obj.age = 12;

// console.log(str);

// var text = '{ "name":"John", "birth":"1996-05-15", "city":"New York"}';
// var obj = JSON.parse(text, function (key, value) {
//   if (key == "birth") {
//     return new Date(value);
//   } else {
//     return value;
//   }
// });
// console.log(obj.birth);

// var obj = { name: "John", age: 29 };

// var text = JSON.stringify(obj);

// console.log(text);
// var obj = { name: "John", today: new Date(), city: "New York" };
// var myJSON = JSON.stringify(obj);
// console.log(myJSON);

// var obj = {
//   name: "John",
//   age: function () {
//     return 30;
//   },
//   city: "New York",
// };
// var myJSON = JSON.stringify(obj);
// console.log(myJSON);

// var obj = {
//   name: "John",
//   age: function () {
//     return 30;
//   },
//   city: "New York",
// };
// obj.age = obj.age.toString();
// var myJSON = JSON.stringify(obj);
// console.log(myJSON);

// // onclick	Sự kiện xảy ra khi người dùng click chuột vào phần tử
// // ondblclick	Sự kiện xảy ra khi người dùng click kép chuột vào phần tử
// // onmouseenter	Sự kiện xảy ra khi người dùng di chuyển con trỏ vào phần tử
// // onmouseleave	Sự kiện xảy ra khi người dùng di chuyển con trỏ ra khỏi phần tử.
// // onkeydown	Sự kiện xảy ra khi người dùng đang nhấn một phím
// // onkeyup	Sự kiện xảy ra khi người dùng nhả phím ra
// // oncopy	Sự kiện xảy ra khi người dùng sao chép nội dung của phần tử
// // oncut	Sự kiện xảy ra khi người dùng cắt nội dung của phần tử
// // onpaste	Sự kiện xảy ra khi người dùng dán nội dung vào phần tử
// // onchange	Sự kiện xảy ra khi người dùng thay đổi giá trị của phần tử

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");

// const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");

// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     $(".tab-item.active").classList.remove("active");
//     $(".tab-pane.active").classList.remove("active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//   };
// });

// const languages = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];

// const setOfLanguages = new Set(languages);
// console.log(setOfLanguages);

// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];
// let c = [...a, ...b];
// const countries = ["Finland", "Sweden", "Norway"];

// const BoTrongNull = new Set();
// console.log(BoTrongNull);
// for (let a = 0; a <= 10; a++) {
//   BoTrongNull.add(a);
// }
// console.log(BoTrongNull);

// BoTrongNull.delete(4);
// console.log(BoTrongNull);
// BoTrongNull.clear();
// console.log(BoTrongNull);

// const languages1 = ["English", "Finnish", "English", "French", "Spanish"];
// console.log(languages1);
// console.log(c);

// const usersText = `{
// "users":[
//   {
//     "firstName":"Asabeneh",
//     "lastName":"Yetayeh",
//     "age":250,
//     "email":"asab@asb.com"
//   },
//   {
//     "firstName":"Alex",
//     "lastName":"James",
//     "age":25,
//     "email":"alex@alex.com"
//   },
//   {
//   "firstName":"Lidiya",
//   "lastName":"Tekle",
//   "age":28,
//   "email":"lidiya@lidiya.com"
//   }
// ]
// }`;

// const usersObj = JSON.parse(usersText, undefined, 4);

// for (let i = 0; i <= 10; i++) {
//   let line = " ";
//   for (let j = 0; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// // JSON.stringify(txt,undefined,4)
// // const txtjson = JSON.stringify(chaegrday16, ["Thomas"], 4);
// // console.log(txtjson);

// const dog = {};
// console.log(dog);

// dog.name;
// dog.legs;
// dog.color;
// dog.age;
// dog.bark_property = "woof woof";

// const names = ["Asabeneh", "Brook", "David", "John"];
// console.table(names);

// const userday13 = [
//   {
//     name: "Asabeneh",
//     title: "Programmer",
//     country: "Finland",
//     city: "Helsinki",
//     age: 250,
//   },
//   {
//     name: "Eyob",
//     title: "Teacher",
//     country: "Sweden",
//     city: "London",
//     age: 25,
//   },
//   {
//     name: "Asab",
//     title: "Instructor",
//     country: "Norway",
//     city: "Oslo",
//     age: 22,
//   },
//   {
//     name: "Matias",
//     title: "Developer",
//     country: "Denmark",
//     city: "Copenhagen",
//     age: 28,
//   },
// ];
// console.table(userday13);

// const countriesday13 = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];

// console.time("Regular for loop");
// for (let i = 0; i < countriesday13.length; i++) {
//   console.log(countriesday13[i][0], countriesday13[i][1]);
// }
// console.timeEnd("Regular for loop");

// console.time("for of loop");
// for (const [name, city] of countriesday13) {
//   console.log(name, city);
// }
// console.timeEnd("for of loop");

// console.time("forEach loop");
// countriesday13.forEach(([name, city]) => {
//   console.log(name, city);
// });
// console.timeEnd("forEach loop");

// console.info("30 Days Of JavaScript challenge is trending on Github");
// console.info("30 Days Of fullStack challenge might be released");
// console.info("30 Days Of HTML and CSS challenge might be released");

// const namesday13 = ["Asabeneh", "Brook", "David", "John"];
// const countrie13 = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// const user13 = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
//   age: 250,
// };
// const users13 = [
//   {
//     name: "Asabeneh",
//     title: "Programmer",
//     country: "Finland",
//     city: "Helsinki",
//     age: 250,
//   },
//   {
//     name: "Eyob",
//     title: "Teacher",
//     country: "Sweden",
//     city: "London",
//     age: 25,
//   },
//   {
//     name: "Asab",
//     title: "Instructor",
//     country: "Norway",
//     city: "Oslo",
//     age: 22,
//   },
//   {
//     name: "Matias",
//     title: "Developer",
//     country: "Denmark",
//     city: "Copenhagen",
//     age: 28,
//   },
// ];

// console.group("Names");
// console.log(namesday13);
// console.groupEnd();

// console.group("Countries");
// console.log(countrie13);
// console.groupEnd();

// console.group("Users");
// console.log(user13);
// console.log(users13);
// console.groupEnd();

// console.clear();
// console.table(user13);
// console.table({ name: user13.name, title: user13.title });

// console.group("Địa chỉ");
// console.log("Quốc gia:", user13.country);
// console.log("Thành phố:", user13.city);
// console.groupEnd();

// console.assert(10 > 2 * 10, "sai");
// console.warn("canh bao");
// console.error("error");

// const array = Array.from({ length: 1000000 }, (_, i) => i);

// console.time("while");
// let i = 0;
// while (i < array.length) {
//   i++;
// }
// console.timeEnd("while");

// console.time("for");
// for (let i = 0; i < array.length; i++) {}
// console.timeEnd("for");

// console.time("forEach");
// array.forEach((item) => {});
// console.timeEnd("forEach");

// console.clear();

// //day 14

// try {
//   let lastName = "Yetayeh";
//   let fullName14 = fistName + " " + lastName;
// } catch (err) {
//   console.error(err);
// } finally {
//   console.log("In any case I will be executed");
// }

// console.clear();

// //day 15

// class Zoo {
//   constructor(name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//   }
// }
// class Dog extends Zoo {
//   constructor(name, age, color) {
//     super(name, age, color);
//   }
// }

// const myDog = new Dog("Buddy", 3, "Nâu", "Golden Retriever");
// console.log(myDog);

// console.clear();

// // //day 16

// const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
// let age = 250;
// let isMarried = true;
// const student = {
//   firstName: "Asabeneh",
//   lastName: "Yetayehe",
//   age: 250,
//   isMarried: true,
//   skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
// };
// const txt = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `;
// const txtJSON = JSON.stringify(skills);

// console.log(txtJSON);
// const data16 = JSON.parse(txt);
// for (const key in data16) {
//   if (data16.hasOwnProperty(key)) {
//     const ageUser16 = data16[key].age;
//     console.log(ageUser16);
//   }
// }

// const studentSubset = {
//   firstName: student.firstName,
//   lastName: student.lastName,
//   skills: student.skills,
// };
// const studentJSON = JSON.stringify(studentSubset);

// console.log(studentJSON);

// console.log(JSON.parse(studentJSON));

// const data = JSON.parse(txt);
// console.log(data);

// //17
// localStorage.setItem("key", "value");
// console.log(localStorage);

// localStorage.setItem("age", 200);
// console.log(localStorage);

// localStorage.setItem("firstName", "John");
// localStorage.setItem("lastName", "Doe");
// localStorage.setItem("age", "30");
// localStorage.setItem("country", "USA");
// localStorage.setItem("city", "New York");

// const firstName17 = localStorage.getItem("firstName");
// console.log(firstName17);

// const Sv17 = {
//   name: "nug",
//   ho: "nguyen",
//   tuoi: "16",
//   skill: "hacker",
// };

// const SvToJSON = JSON.stringify(Sv17);
// localStorage.setItem("SvToJSON", SvToJSON);

// console.log(JSON.parse(localStorage.getItem("SvToJSON")).name);
// console.log(JSON.parse(localStorage.getItem("SvToJSON")).tuoi);
// console.log(JSON.parse(localStorage.getItem("SvToJSON")).skill);

// const userAccount17 = {
//   name: "",
// };

// //day18
// //Callback
// // const doSomething = (callback) => {
// //   setTimeout(() => {
// //     const skills = ["HTML", "CSS", "JS"];
// //     callback("It did not go well", skills);
// //   }, 2000);
// // };

// // const callback = (err, result) => {
// //   if (err) {
// //     return console.log(err);
// //   }
// //   return console.log(result);
// // };

// // doSomething(callback);

// // doSomething((err, result) => {
// //   if (err) {
// //     return console.log(err);
// //   }
// //   return console.log(result);
// // });

// // const doPromise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     const skills = ["HTML", "CSS", "JS"];
// //     if (skills.length > 0) {
// //       resolve(skills);
// //     } else {
// //       reject("Something wrong has happened");
// //     }
// //   }, 2000);
// // });

// // doPromise
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((error) => console.log(error));

// const countriesAPI = "https://restcountries.com/v2/all";
// const catsAPI = "https://api.thecatapi.com/v1/breeds";

// // fetch(countriesAPI)
// //   .then((DocAPItoJSON) => DocAPItoJSON.json())
// //   .then((data) => {
// //     data.forEach((country) => {
// //       const name = country.name;
// //       const capital = country.capital;
// //       const languages = country.languages
// //         .map((language) => language.name)
// //         .join(", ");
// //       const population = country.population;
// //       const area = country.area;

// //       console.log("Country:", name);
// //       console.log("Capital:", capital);
// //       console.log("Languages:", languages);
// //       console.log("Population:", population);
// //       console.log("Area:", area);
// //       console.log("------------------------");
// //     });
// // })
// let catNames = [];

// // fetch(catsAPI)
// //   .then((response) => {
// //     if (!response.ok) {
// //       throw new Error("Network response was not ok");
// //     }
// //     return response.json();
// //   })
// //   .then((data) => {
// //     data.forEach((cat) => {
// //       catNames.push(cat.name);
// //     });
// //     console.log("Cat Names:", JSON.parse(catNames));
// //   })
// //   .catch((error) => {
// //     console.error("There was a problem with the fetch operation:", error);
// //   });
// console.clear()

// //day19
// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     return count;
//   }

//   return innerFunction;
// }
// const innerFunc = outerFunction();

// console.log(innerFunc());
// console.log(innerFunc());
// console.log(innerFunc());

// function outerFunction1() {
//   let count = 0;
//   function plusOne() {
//     count++;
//     return count;
//   }
//   function minusOne() {
//     count--;
//     return count;
//   }

//   return {
//     plusOne: plusOne(),
//     minusOne: minusOne(),
//   };
// }
// const innerFuncs = outerFunction1();

// console.log(innerFuncs.plusOne);
// console.log(innerFuncs.minusOne);

// function off(){
//   let outerVar = "Tôi Test Thử..."
//   function off2(){
//     console.log(outerVar)
//   }
//   return outerVar
// }
// console.log(off())

// function barChucNang(){
//   function cn1(){
//     console.log("Chức năng 1")
//   }
//   function cn2() {
//     console.log("Chức năng 2");
//   }
//   function cn3() {
//     console.log("Chức năng 3");
//   }
//   return {
//     function1: cn1,
//     function2: cn2,
//     function3: cn3,
//   };
// }
// const inrachucnang = barChucNang()
// inrachucnang.function1()
// inrachucnang.function2();
// inrachucnang.function3();

// function PersonAccount(firstName, lastName, income, expenses) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.income = income || [];
//   this.expenses = expenses || [];

//   this.totalIncome = function () {
//     return this.income.reduce((total, income) => total + income.amount, 0);
//   };

//   this.totalExpense = function () {
//     return this.expenses.reduce((total, expense) => total + expense.amount, 0);
//   };

//   this.accountInfo = function () {
//     return `Tên: ${this.firstName} ${
//       this.lastName
//     }, Thu nhập: ${this.totalIncome()}, Chi phí: ${this.totalExpense()}`;
//   };

//   this.addIncome = function (description, amount) {
//     this.income.push({ description, amount });
//   };

//   this.addExpense = function (description, amount) {
//     this.expenses.push({ description, amount });
//   };

//   this.accountBalance = function () {
//     return this.totalIncome() - this.totalExpense();
//   };
// }

// const myAccount = new PersonAccount(
//   "John",
//   "Doe",
//   [{ description: "Lương", amount: 5000 }],
//   [{ description: "Mua sắm", amount: 1000 }]
// );

// // Thêm một khoản thu nhập mới
// myAccount.addIncome("Thưởng", 1000);
// myAccount.addExpense("Hóa đơn điện", 200);
// console.log(myAccount.accountInfo());
// console.log(`Số dư tài khoản: ${myAccount.accountBalance()}`);

//Day 20

const allTitles = document.getElementsByTagName("h1");

console.log(allTitles);
console.log(allTitles.length);

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}

let firstTitle = document.querySelector(".title");
console.log(firstTitle);

console.clear();
const firstParagraph = document.querySelector("p");
// console.log(firstParagraph.textContent);

const ids = ["d1", "d2", "d3", "d4"];
for (const id of ids) {
  const paragraph = document.querySelector(`#${id}`);
  // console.log(paragraph.textContent);
}

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
for (const paragraph2 of paragraphs) {
  console.log(paragraph2.textContent);
}
const fourthParagraph = paragraphs[3];
// fourthParagraph.textContent = "Fourth Paragraph";

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].id = `paragraph${i + 1}`;
  paragraphs[i].classList.add("custom-class");
}
paragraphs.forEach((paragraph, index) => {
  paragraph.style.color = "blue";
  paragraph.style.backgroundColor = "lightgray";
  paragraph.style.border = "1px solid black";
  paragraph.style.fontSize = "16px";
  paragraph.style.fontFamily = "Arial, sans-serif";
});
paragraphs.forEach((paragraph, index) => {
  if (index % 2 === 0) {
    paragraph.style.color = "green";
  } else {
    paragraph.style.color = "red";
  }
});
paragraphs.forEach((paragraph, index) => {
  // Đặt nội dung văn bản cho từng đoạn văn
  paragraph.textContent = `Đoạn văn ${index + 1}`;
  // Đặt id cho từng đoạn văn
  paragraph.id = `paragraph${index + 1}`;
  // Đặt lớp cho từng đoạn văn
  paragraph.classList.add("custom-class");
});

let title = document.createElement("h1");
title.className = "title";
title.style.fontSize = "24px";
title.textContent = "Creating HTML element DOM Day 2";

console.log(title.textContent);

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// const divDay23 = document.getElementById("divContainer");
// for (let i = 1; i <= 100; i++) {
//   const newDiv = document.createElement("div");
//   newDiv.textContent = i;
//   if (i % 2 === 0) {
//     newDiv.style.backgroundColor = "green";
//   } else if (i / 2 > 0) {
//     newDiv.style.backgroundColor = "yellow";
//   }
//   if (isPrime(i)) {
//     newDiv.style.backgroundColor = "red";
//   }

//   divContainer.appendChild(newDiv);
// }

const countriesALL = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territories",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const newDiv2 = document.getElementsByTagName("div");
console.log(newDiv2.length);
console.log(countriesALL.length);
// newDiv2[2].textContent = countriesALL[2];
for (let i = 1; i <= newDiv2.length; i++) {
  // newDiv2[i].textContent = countriesALL[i];
  if (i == newDiv2.length) {
    break;
  }
}
const random = Math.floor(Math.random() * countriesALL.length);
console.log(countriesALL[random]);

console.clear();

// const button = document.querySelector("button");
// button.addEventListener("dblclick", (e) => {
//   console.log("e gives the event listener object:", e);
//   console.log("e.target gives the selected element: ", e.target);
//   console.log(
//     "e.target.textContent gives content of selected element: ",
//     e.target.textContent
//   );
// });

// const mass = document.querySelector("#mass");
// const height = document.querySelector("#height");
// const button = document.querySelector("button");

// let bmi;
// button.addEventListener("click", () => {
//   bmi = mass.value * height.value ;
//   bmi2 = mass.value ** height.value;
//   alert(`your bmi is ${bmi}`);
//   console.log(bmi);
//   console.log(bmi2);
// });

// const input = document.querySelector("input");
// const p = document.querySelector("p");

// input.addEventListener("input", (e) => {
//   p.textContent = e.target.value;
// });

const input = document.querySelector("input");
const p = document.querySelector("p");

// input.addEventListener("blur", (e) => {
//   p.textContent = "Field is required";
//   p.style.color = "red";
// });

// document.body.addEventListener("keypress", (e) => {
//   alert(e.keyCode);
// });

const okButton = document.getElementById("okButton");
const nhapsocuoi = document.getElementById("nhapsocuoi");
const ketqua = document.getElementById("ketqua");



okButton.addEventListener("click", () => {
  const inputNumber = nhapsocuoi.value;
  if (!isNaN(inputNumber)) {
    for (let i = 1; i <= inputNumber; i++) {
      const newDiv = document.createElement("div");
      newDiv.textContent = i;
      if (i % 2 === 0) {
        newDiv.style.backgroundColor = "green";
      } else if (i / 2 > 0) {
        newDiv.style.backgroundColor = "yellow";
      }
      if (isPrime(i)) {
        newDiv.style.backgroundColor = "red";
      }
      ketqua.appendChild(newDiv);
    }
  } else {
    ketqua.textContent = "Vui lòng nhập một số hợp lệ.";
  }
});
