//! Lessons 1 to 9 Assignments

//? 2

let h1 = document.createElement("h1");
h1.innerHTML = "Elzero";
h1.style.color = "blue";
h1.style.fontSize = "80px";
h1.style.fontWeight = "bold";
h1.style.fontFamily = "Arial";
document.body.appendChild(h1);

//*Exercises separation 

//? 3

console.log("%cElzero", "color: red; font-size: 40px;");
console.log("%cWeb", "color: green; font-size: 40px; font-weight:bold;");
console.log(
  "%cSchool",
  "color: white; background-color: blue; font-size: 40px;"
);

//? 4
console.group("group 1");
console.log("Message one");
console.log("Message two");
console.group("Child group");
console.log("Message one");
console.log("Message two");
console.group("Grand child group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group two");
console.log("Message one");
console.log("Message two");
console.groupEnd();

//? 5

const people = ["Elzero", "Ahmed", "Sameh", "Jamal", "Aya"]

console.table(people);

//? 6

//* disable codes in two different ways 

//  console.log("Iam In Console");

/*

document.write("Iam In Page");
*/



//! Lessons 10 to 17 Assignments

let numberOne = '10';
let numberTwo = '20';
console.log(numberOne,numberTwo)
console.log(`${numberOne}${numberTwo}`)
console.log(numberOne  + '\n'+ numberTwo)
console.log(`${numberOne}
${numberTwo}`)

//*******/
// console.log(Elzero.innerHTML); // object
// console.log(typeof Elzero); // object
//*******/

console.log("I'm In\n\\\\\nLove \\\\ \\\"\\\"\\\" \\'\\'\\' ++ With ++ \\\\\\\"\\\"\\\"\\\"\n\\\"JavaScript\\\"``");
//****/


let a = 21;
let b = 20;

console.log('_'+a+'_'+b+a+'_'+b+a+'_'+b+a+'_'+b+'_'); // _21_2021_2021_2021_20_

//! Lessons 17 to 22 Assignments

// Replace ? With Arithmetic Operators

console.log((-10 + +20) / (+15 - +3) * (190 - +10) / 400); // 0.375


/*

.Use the variable's value to get the required result in five different ways.
.You can use everything you have learned before to achieve the required result.
.It is not allowed to use any numbers at all, and you can use Boolean values.
.Each method must be completely different from the others.
.The required result is the number 6.

*/

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log( num + num + --num - num ); // 6

// Solution Three
console.log((num++ + --num) + +num); // 6

// Solution Four
console.log(num - --num  + ++num + ++num); // 6

// Solution Five
console.log(num * 2); // 6

// Solution Six
console.log(num**2 - num); // 6


/*

Use the value of the variable to obtain the required result in five different ways.
You can use everything you have learned before to achieve the required result.
It is not allowed to use any numbers at all.
Each method must be completely different from the others.
The required result is the number 20.
The resulting number must be in the form of a number and not a string.

*/

let number = "10";

// Solution One
console.log(+number + +number); // 20

// Solution Two
console.log("Write Your Code Here"); // 20

// Solution Three
console.log("Write Your Code Here"); // 20

// Solution Four
console.log("Write Your Code Here"); // 20