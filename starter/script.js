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
// const now = 2037;

// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power 3 = 2 + 2 + 2

//concatenation
// const firstName = "Anna";
// const lastName = "Jonas";
// console.log(firstName + " " + lastName);
// ' ' to create an empty space

//assignment operator
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// Comparison operators

// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// let x, y;

// x = y = 25 - 10 - 5; // x = y = 10

// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// const firstName = "jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

// //template literals

// //insert variables
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// //write couple lines of strings
// console.log(
//   "String \n\
// multiple \n\
// lines"
// );

// console.log(`String
// multiple
// lines`);

//decisions

// const age = 15;
// // const isOldEnough = age >= 18;

// //control structure
// if (age >= 18) {
//   console.log("Sarah can start driving license 🥳");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years😓`);
// }

// const birthYear = 1991;

// //we need to define century because it will not be visible outside of the block
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN); // number, NaN is still a number, just invalid

// console.log(String(23));

// // type coercion
// console.log("I am " + 23 + " years old"); //this plus convert number to a string automatically when there are another strings

// console.log("23" - "10" - 3); // 10, because the minus operator triggers opposite from plus operator conversion, it convert string to number

// console.log("23" * "2"); // the multiplier also converts to numbers

// let n = "1" + 1; // '11'
// n = n - 1; // convert '11' to number
// console.log(n); // 10

// let x = 2 + 3 + 4 + "5";
// console.log(x); // '95'

// let y = "10" - "4" - "3" - 2 + "5";
// console.log(y); // '15'

// lesson 21

// falsy values is a values that is not exactly false but will become false when we try to convert them into a boolean

// there are 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true

// js does type coercion into boolean when: - when using logical operators; - in a logical context like if/else

const money = 100;
if (money) {
  console.log("Don't spend it all ;)"); // this will be executed
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED"); // this will be executed
}
