// Primitive Data types -: // Primitive data types are passed by value (call by value), meaning a copy of the value is passed, not the original.

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // Number
const scoreValue = 100.6 // Number (// JavaScript has no separate int or float data type; all numeric values are of type Number.)

const isLoggedIn = false // Boolean
const outsideTemp = null // null
let userEmail; // undefined
let userEmail = undefined // We can write like this also it give output as undefined.

// Symbol() always creates a unique value; the argument is just a label and does not affect the symbol.

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); // false 

const bigNumber = 1234567890123456789n // BigInt represents very large integers and is created by adding 'n' to the end of a number or using BigInt().

// Reference (Non primitive) -: // Non-primitive data types store and pass a reference (address), so multiple variables can point to the same object.

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array

let myObj = {
    name: "Rishi",
    age: 20,
} // Object 


const myFunction = function() {
    console.log("Hello World");
} // Function  

// For more details, refer to the official ECMAScript specification:
// https://262.ecma-international.org/5.1/#sec-11.4.3