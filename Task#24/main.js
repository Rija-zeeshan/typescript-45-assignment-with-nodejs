var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//test for equality and inequality with strings
console.log(" Is apple is equal to apple");
console.log(apple == "apple");
console.log("Is apple is not equal to apple");
console.log(apple != "apple");
//tests using lowercase functions
console.log("Is APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("Is APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
// tests numerical values
// equal to
console.log("Is ten equal to twenty");
console.log(ten == twenty);
//not equal to
console.log("Is ten not equal to twenty");
console.log(ten != twenty);
//greaterv than
console.log("Is ten is greater then zero");
console.log(ten > 0);
//less than
console.log("twenty is less than 10");
console.log(twenty < 10);
// greater than or equal to 
console.log("Is ten greater than or equal to 5?");
console.log(ten >= 5);
//less than or euals to
console.log("Is twenty is less than or equal to 10");
console.log(twenty <= 10);
//tests using "and" "or" operators
//using &&
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//using ||
console.log("20 is greater than 50 and twenty is equal to twenty");
console.log(20 > 50 || 20 == 20);
//test whether an item is include in array
console.log("Is orange include in my fruits array");
console.log(fruits.includes("orange"));
//not includes in array
console.log("Is orange is not include in my fruit array");
console.log(!fruits.includes("orange"));
