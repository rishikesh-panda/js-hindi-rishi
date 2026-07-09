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