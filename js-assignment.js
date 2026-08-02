// (1) Variables of me
const fullname = "Okoye innocent";
let age = 27;
const isEnrolled = true;

console.log(fullname);
console.log(age);
console.log(isEnrolled);

// This code creates three variables about me and prints them to the console.



// (2) Changing a variable value
let walletBalance = 5000;
console.log(walletBalance); // before change

walletBalance = 7500;
console.log(walletBalance); // after change

// This code shows that a variable made with let can be changed later.



// (3) Whole numbers and decimal numbers
const itemsInChart = 3;
const itemPrice = 1999.99;

console.log(itemsInChart);
console.log(itemPrice);

// itemsInChart is a whole number (integer)
// itemPrice is a decimal number (float)



// (4) Total cost
const price = 2500;
const quantity = 4;

const totalCost = price * quantity;
console.log(totalCost);

// This code multiplies the price by the quantity to get the total cost.



// (5) Arithmetic operators
const a = 17;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// This code performs addition, subtraction, multiplication, division, remainder, and exponentiation.



// (6) Jersey purchase
const jerseyPrice = 12000;
const quantityOfJersey = 3;
const deliveryFee = 2000;
const totalpayment = (jerseyPrice * quantityOfJersey) + deliveryFee;

console.log(totalpayment);

// This code calculates the total amount paid, including the delivery fee.



// (7) Comparing values
const studentScore = 68;
const passMark = 50;

console.log(studentScore > passMark);
console.log(studentScore >= 70); 

// This code compares the student's score with the pass mark and another target score.



// (8) Compare two prices
const priceA = 8000;
const priceB = 12000;

console.log(priceA < priceB); 
console.log(priceA > priceB); 
console.log(priceA <= priceB);
console.log(priceA >= priceB);

// This code compares two prices using different comparison operators.



// (9) Number to string conversion and equality
const num = 7;
const str = "7";

console.log(num == str); 
console.log(num === str);

// == compares only the value, so it is true.
// === compares both value and data type, so it is false.



// (10) Using num and str in arithmetic operations with != vs !==
console.log(num != str); 
console.log(num !== str);

// != checks if the values are different after type conversion.
// !== checks if the values or data types are different.



// (11) The ! (Not) operator
const isRaining = true;
const isWeekend = false;

console.log(!isRaining); 
console.log(!isWeekend); 

// The ! operator reverses a boolean value:
// true becomes false and false becomes true



// (12) Pin check
const correctPin = 1234;
const enteredPin = "1234";

console.log(correctPin === enteredPin); 

// The user should not be allowed in because the values have different data types.
// === requires both the value and the data type to match.



/*
A quick note about JavaScript data types
In JavaScript, there are several data types that can be used to store and manipulate values.
The main data types include:

*
1. const - Represents a constant value that cannot be reassigned. Example: const name = "Okoye";
2. let - Represents a variable that can be reassigned. Example: let age = 25;
*


3. string - "hello" or 'hello' or `hello`
4. number - 42 or 3.14
5. boolean - true or false
6. array - [1, 10, 20]
7. object - Represents a collection of key-value pairs, e.g. { name: "Okoye" }


*
8. integer - whole numbers without decimal points. Example: 5, -10, 0
9. float - numbers with decimal points. Example: 3.14, -2.5, 0.0
10. % - gives the remainder of a division operation. Example: 10 % 3 = 1
11. == - checks for equality of value only. Example: 5 == "5" returns true
12. === - checks for equality of both value and data type. Example: 5 === "5" returns false
13. != - checks if values are different. Example: 5 != "5" returns false
14. !== - checks if values and data types are different. Example: 5 !== "5" returns true
15. ! - reverses a boolean value. Example: !true returns false, !false returns true
*/


if (condition) {
    
} else {
    
}

switch (status) {
    case "paid":
        console.log("show your receipt");
        break;
    case "refund":
        console.log("please visit your branch, There has been an issue");
        break;
    default:
        console.log("check status, because we are not sure");
}

function n(params) {
    
}

