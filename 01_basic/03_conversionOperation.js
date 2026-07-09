let score = "33"

console.log(typeof score); // you also write like this 
console.log(typeof(score)); // and also like this 

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// Conversion Of Datatypes Result -:
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// Conversion Of Datatypes Result -:
// 1 => true; 0 => false
// "" => false
// "Rishi" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *************** Operation ***************

let value1 = 3
let negValue = -value1
console.log(negValue);

let value2 = -3
let posValue = -value2
console.log(posValue);

// Unary minus (-) changes the sign: positive → negative, negative → positive
// Unary means an operator that works on only one value.
// 5 - 3 Binary minus operator (works on two values)
// -3 Unary minus operator (works on one value)

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello"
let str2 = " Rishi"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); 
console.log(1 + "2");

// If either side of + is a string, the other value is converted to a string and both are joined (concatenated). 

console.log("1" + 2 + 2); // If a string comes first, the values after it are converted to strings and concatenated. 
console.log(1 + 2 + "2"); // If a string comes last, the operations before the string are performed first, and then the result is converted to a string and concatenated.

// This happens because the + operations are evaluated from left to right.

console.log(+true);
console.log(+"");

// When + is written before a single value, it is called unary plus(+), and JavaScript tries to convert that value into a number.

let num1, num2, num3

num1 = num3 = num3 = 2 + 3

let gameCounter = 100
++gameCounter; // Prefix (++value): Increases the value first, then uses it.
gameCounter++; // Postfix (value++): Uses the value first, then increases it.
console.log(gameCounter); 

// ++ is called the increment operator; it increases the current value of a variable by 1 each time it is used.
// Example: If gameCounter = 100, then gameCounter++ makes it 101. Using gameCounter++ again makes it 102.