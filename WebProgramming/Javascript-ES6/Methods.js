//parse : change json to obj
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject)

//stringify: change obj to json
const jsonString2 = JSON.stringify(jsonObject)
console.log(jsonString2)

//push Arr
const array = [1, 2, 3, 4, 5];
array.push(4);
console.log(array)

//array.pop()
console.log(array.pop())
console.log(array)

//join
// const array = ["apple", "banana", "orange"];
const joinedString = array.join(" ---- ");
console.log(joinedString)

//slice
const array2 = ["a", "b", "c", "d", "e"];
const slicedArray = array2.slice(1, 3);
console.log(slicedArray)

//split

const string = "apple, banana, orange";
const splittedArray = string.split(", ");
console.log(splittedArray)

//includes
const string2 = "hello world";
const isContained = string2.includes("world");
console.log(isContained)

//for
console.clear()
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//forEach
console.clear()
array.forEach(function (element) {
    console.log(element);
});

//for..of
for (const element of array) {
    console.log(element);
}

