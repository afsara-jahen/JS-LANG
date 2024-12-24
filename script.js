//1.creating a variable//

let carName = "Volvo";

//2.declaring variables//


let firstName = "John", lastName = "Doe", age = 35;

//3.using the correct assignment operator//

x = 10;
y = 5;
x *= y;  // x will now be 50

//4.adding comments to describe the correct data type

let length = 16; // data type: Number
let LastName = "Johnson"; // data type: String

const x = {
  firstName: "John",  
  lastName: "Doe"
}; // data type: Object

//5. 2. Execute the function named `myFunction`.

function myFunction() {
    alert("Hello World!");  // This will show an alert with the message
  }


// 6.Creating the object 'person' with name and age properties
let person = {
    name: "John",
    age: 50
  };
  
  //7. Access the object and alert the message "John is 50"
  alert(person.name + " is " + person.age);  // This will show: "John is 50"


  <button onclick="alert('You clicked the button!')">Click me.</button>
 
  //8.Array Related Question 

  const Brand = ["Volvo", "Jeep", "Mercedes"];

// ChangING the first item in the 'Brand' array to "Ford"
Brand[0] = "Ford"; 

console.log(Brand); 

//9.Math Related Problems

let randomNumber = Math.random();
console.log(randomNumber);  


let largestNumber = Math.max(10, 20);
console.log(largestNumber); 

let squareRoot = Math.sqrt(9);
console.log(squareRoot); 

//10.comparison operator related problems! 


let a = 10;
let b = 5;

alert(a > b); 

let Age = 16;  

alert(Age < 18 ? "Too young" : "Old enough");



//part 2


//1.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77

//Task 2: Check if a number is even

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false


//Task 3: Sum two numbers


function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30


//Task 4: Find the smallest number in an array


function findSmallestNum(arr) {
  return Math.min(...arr);
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5


//Task 5: Count the number of vowels in a string


function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3



//Task 6: Get the first element of an array


function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"


//Task 7: Check if an array is empty


function isArrayEmpty(arr) {
  return arr.length === 0;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false


//Task 8;

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040


//task 9;


function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"


//task 10,


function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"


//Task 11,

function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5

//Task 12,

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]


//task 13,

function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"

//task 14,



function getFirstCharacter(str) {
  return str[0];
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"

//task 15,


function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5












  


