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

// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // true

// // js does type coercion into boolean when: - when using logical operators; - in a logical context like if/else

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)"); // this will be executed
// } else {
//   console.log("You should get a job");
// }

// let height;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED"); // this will be executed
// }

// const age = 18;
// if (age === 18) console.log("You just became an adult (strict)"); // if 18 is a number, it will be executed, if 18 is a string it wont be executed
// if (age == 18) console.log("You just became an adult (loose)"); // it will be executed in both ways

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);

// if (favourite === 23) {
//   // '23' == 23, if === it will not be executed
//   console.log("Cool! 23 is an amazing number");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("number is not 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");

// basic boolean logic: the and (true when all values are true), or (true when one true) & not (inverts into true/false value) operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // and, true, if one of the value is false the result will be false

// console.log(hasDriversLicense || hasGoodVision); // or, true, if one operator is true the result will be true

// console.log(!hasDriversLicense); // false

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah should drive");
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = true; // C

// console.log(hasDriversLicense || hasGoodVision || isTired); // true, if && and one value is false the rsult will be false

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah should drive");
// } else {
//   console.log("Someone else should drive");
// }

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// my solution

// const scoreDolphins = 96
// const scoreKoalas = 88

// if(scoreDolphins) {
//     console.log("Dolphins win the trophy")
// } else if (scoreKoalas) {
//     console.log("Koalas win the trophy")
// } else {
//     console.log("Both win the trophy")
// }

// their solution

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy');
// }

// or

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

// const day = prompt("enter day");

// switch (day) {
//   case "monday": // day === monday, if this true code will be executed
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break; // without break code will be executing the next case
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break;
//   default:
//     console.log("not a valid day");
// }

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend");
// } else {
//   console.log("not a valid day");
// }

// expression is a piece of code that produces a value, a words that make a sentence
// 3 + 4
// 1991
// true && false && !false

// statement is a bigger piece of code which is executed and which does not produce a value on itself, like a bigger sentence, that translate all actions that we want to perform

// its a statement, it doesnt produce a value, it simply declares a value
// if (23 > 10) {
//   const big = "23 is bigger"; // expression
// }

// const me = "Jonas";
// console.log(`i'm ${2037 - 1991} years old ${me}`); // this ${} is a expression, it produces value, we can not enter an if statement since it does not produce a value

// conditional operator allows us to write something similar to if/else statement but all in one line

// operator is an expression, it always produces a value
// const age = 23;
// // age >= 18
// //   ? console.log("I like to drink wine 🍷")
// //   : console.log("I like to drink water 💧");

// const drink = age >= 18 ? "drink wine 🍷" : "drink water 💧";
// console.log(drink);

// let drink2;

// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }

// console.log(drink2);

// console.log(
//   `I like to drink ${age >= 18 ? "drink wine 🍷" : "drink water 💧"}`
// );

// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

const bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
