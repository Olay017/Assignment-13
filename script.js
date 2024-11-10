//SOLUTION 1
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const newRectangle = new Rectangle(5, 10);
console.log(newRectangle.getArea());

//SOLUTION 2
function greet(name = "Friend", ...greetings) {
  console.log(`Hello, ${name}!`, ...greetings);
}

greet("Friend", "Good afternoon.", "Are you okay?");

//SOLUTION 3
const person = {
  name: "Taibat",
  age: 20,
  country: "Nigeria",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

//SOLUTION 4
function sumNumbers(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumNumbers(10, 20, 30, 40));

//SOLUTION 5
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;

console.log(rest);

//SOLUTION 6
function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

const [swapA, swapB] = swap(2, 4);
console.log(swapA);
console.log(swapB);

//SOLUTION 7
/*export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

import { add, subtract } from "./math.js";
console.log(add(3, 2));
console.log(subtract(7, 4));*/
//I am getting error on this but couldn't fix the bug due to the deadline short notice. thank you

//SOLUTION 8
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const user = { firstName: "Taibat", lastName: "Yusuf" };
console.log(getFullName(user));

//SOLUTION 9
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Taibat", 20);
person1.introduce();

//SOLUTION 10
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray);
