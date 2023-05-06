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