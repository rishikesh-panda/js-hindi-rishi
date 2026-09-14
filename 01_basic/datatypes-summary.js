// Primitive Data types -: // Primitive data types are passed by value (call by value), meaning a copy of the value is passed, not the original.

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // Number
const scoreValue = 100.6 // Number (// JavaScript has no separate int or float data type; all numeric values are of type Number.)

const isLoggedIn = false // Boolean
const outsideTemp = null // null
let userEmail; // undefined
let userEmaill = undefined // We can write like this also it give output as undefined.

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


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory Types:-

// Stack Memory: Used for primitive data types (e.g., Number, String, Boolean).
// When you store a value in the stack, you receive a copy of that data.
// Because you are working with a copy, modifying a variable does not affect the original.

// Heap Memory: Used for non-primitive (reference) data types (e.g., Objects, Functions).
// When you store an object, you are given a reference (or address) to the original data in the heap.
// Any changes made via this reference will update the original data.

// Practical Examples:-

// 1. Stack Memory (Copy behavior)
// When you assign one primitive variable to another, you create an independent copy.

let myYouTubeName = "chaiAurCode";
let anotherName = myYouTubeName; // A copy is created
anotherName = "hiteshChoudhary";

console.log(myYouTubeName); // "chaiAurCode" (Original remains unchanged)
console.log(anotherName);   // "hiteshChoudhary"

// Key takeaway: The original value is protected.

// 2. Heap Memory (Reference behavior)
// When you assign an object, both variables point to the same memory location.

let userOne = { email: "user@google.com" };
let userTwo = userOne; // Both point to the same memory reference

userTwo.email = "hitesh@google.com";

console.log(userOne.email); // "hitesh@google.com" (Original was updated)
console.log(userTwo.email); // "hitesh@google.com"

// Key takeaway: You are modifying the actual object in the heap (8:51).





