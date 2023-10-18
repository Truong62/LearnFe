var array = ["js", "py", "rb"];

var [a] = array;
console.log(a); //js

const {
 z = "default",
  b,
  ...rest
} = {
  b: "val1",
  c: "val2",
  d: "val3",
};

console.log(z, b, rest);

// sp
const   q = [1, 2, 3];
const f = [2, 3];
const c = [...q, ...f];

console.log(c);
