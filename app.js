// Lessons 1 to 9 Assignments

// 1

let h1 = document.createElement("h1");
h1.innerHTML = "Elzero";
h1.style.color = "blue";
h1.style.fontSize = "80px";
h1.style.fontWeight = "bold";
h1.style.fontFamily = "Arial";
document.body.appendChild(h1);

/////////////////

// 2

console.log("%cElzero", "color: red; font-size: 40px;");
console.log("%cWeb", "color: green; font-size: 40px; font-weight:bold;");
console.log(
  "%cSchool",
  "color: white; background-color: blue; font-size: 40px;"
);

// 3
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

// 4

const people = ['Elzero', 'Ahmed', 'Sameh', 'Jamal', 'Aya'];
  
  console.table(people);
  