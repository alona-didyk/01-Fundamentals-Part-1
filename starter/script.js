// let js = "amazing";

// console.log(40 + 8 + 23 - 10);

// let firstName = "jonas";
// console.log(firstName);

// let jsIsFun = true;
// console.log(jsIsFun);

// // console.log(typeof true);
// console.log(typeof jsIsFun);
// // console.log(typeof 23);
// // console.log(typeof "jonas");

// jsIsFun = "yes";
// console.log(typeof jsIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null); //object(bug in js)

//mutable variable, block
// let age = 30;
// age = 31;

// //unmutable variable, cannot change
// const birthYear = 1991;
// // birthYear = 2000;

// //function
// var job = "programmer";
// job = "teacher";

//Math operators
const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power 3 = 2 + 2 + 2

//concatenation
const firstName = "Anna";
const lastName = "Jonas";
console.log(firstName + " " + lastName);
// ' ' to create an empty space

//assignment operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
