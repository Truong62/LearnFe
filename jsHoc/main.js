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



