let car = "Kia";
let bike: string;
bike = "wwinner";

let num: number = 10;

let isLoading: boolean = true;

let body = undefined;

let footer: null;

let person: any;
person = 10;
person = "haha";
person = false;

let house: {
  address: string;
} = {
  address: "",
};
house.address = "Hanoi";

let products: any[] = [];
products.push(1);
products.push("Hello");

let names = ["Alex", "bin"];
let address: string[] = [];
address.push("hanoi");

let number: number[] = [];
number = [1, 2, 3];

let people: {
  name: string;
  age: number;
}[] = [];
people.push({ name: "alxe", age: 12 });

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

sum(1, 2);

let price: string | number | boolean;
price = "10";
price = 10;
price = true;

enum Size {
  s = "s",
  l = "l",
  m = "m",
  xl = "xl",
}
let size = Size.s;

//Gemeric

type User = {
  name: string;
  age: number;
};

const identity = <Type>(value: Type) => value;

const result = identity<User>({
  name: "pipi",
  age: 19,
});

const myIdentity: <Type>(value: Type) => Type = identity;
