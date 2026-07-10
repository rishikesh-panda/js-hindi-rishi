console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

// Comparisons (>, <, >=, <=) convert values to numbers when needed; for example, "2" becomes 2. 
// That's why "2" > 1 is true and "02" > 1 is true.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// Any numerical comparison with undefined returns false because undefined converts to NaN, while null converts to 0.

// === (Strict check)

console.log("2" == 2); // == (Loose equality) checks values after type conversion if needed.
console.log("2" === 2); // === (Strict equality) checks both value and data type without type conversion.
