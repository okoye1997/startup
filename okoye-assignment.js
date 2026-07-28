============================================
//(1) variables of me//
==========================================

const fullname = "Okoye innocent";
let age = 27;
const isenrolled = true;


console.log(fullname);
console.log(age);
console.log(isenrolled);
=======================================================

(2)changing a variable value//
======================================================
let walletbalance = 5000;
console.log(walletbalance);//before change

let newbalance = walletbalance = 7500;

console.log(newbalance); //after change
=======================================

(3)whole number and decimal number//
=========================================================
const itemsinchart =3
const itemprice = 1999.99

console.log(itemsinchart);
console.log(itemprice);

//itemsinchart is a whole number (integer)// 
// itemprice is a decimal number (float)//
========================================================

(4)total cost
=========================================================
const price = 2500;
const quantity = 4;

const totalcost = price * quantity
console.log(totalcost);
=====================================================

(5)arithmetic operators
==========================================================
const a = 17
const b = 5

const addition = a + b      
const subtraction = a - b
const multiplication = a * b
const division = a / b
const modulus = a % b   

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulus);
====================================================

(6) jersey purchase
=========================================================
const jerseyprice = 12000;
const quantityofjersey = 3;
const deliveryfee = 2000;
const totaljerseycost = (jerseyprice * quantityofjersey) + deliveryfee;

console.log(totaljerseycost);
==========================================================

(7) comparing values
=========================================================
const studentscore = 68;
const passmark = 50;

console.log(studentscore > passmark); true
console.log(studentscore >= 70); false
==========================================================

(8) compare two prices
=========================================================
const priceA =8000
const priceB = 12000

console.log(priceA < priceB); true
console.log(priceA > priceB); false
console.log(priceA <= priceB); true
console.log(priceA >= priceB); false
=========================================================

(9) number to string conversion// == vs ===
=========================================================

const num = 7;
const str = "7";

console.log(num == str); true
console.log(num === str); false

// == checks for equality of value only, so this true
// === checks for equality of both value and data type,so this is false
=============================================================================

(10) using num and str in arithmetic operations // != vs !==
=============================================================================
console.log(num!=str);
console.log(num!==str);

 // != thischecks if the values are different, 
// !== this checks if the values and data types are different
===========================================================================

(11) The !(Not) operator
=============================================================================
const isRaining = true;
const isWeekend = false;

console.log(!isRaining); // false
console.log(!isWeekend); // true    

// The ! operator reverses a boolean value,
//  true becomes false and false becomes true
=========================================================================

(12) Pin Check
=============================================================================
const correctPin = 1234;
const enteredPin = "1234"

console.log(correctPin === enteredPin); // false

//The user entered the correct pin value,
but the data type is different (number vs string), 
so the comparison returns false. 
so the uer should not be granted access to the account.//
==========================================================================================================================

A quick note about javascript data types
In JavaScript, there are several data types that can be used to store and manipulate values. The main data types include
==================================================================================================================================
(1) const - Represents a constant value that cannot be reassigned. Example: name = "okoye"; 

(2) let - Represents a variable that can be reassigned. Example: age = 25; 
========================================================================================================

(3) string - "hello" or 'hello' or `hello` 

(4) number - 42 or 3.14

(5) boolean - true or false

(6) object - Represents a collection of key-value{name:"okoye"}

(7)Array -[1,10,20]
=====================================================================================================================

(8) integer - whole numbers without decimal points. Example: 5, -10, 0

(9) float - numbers with decimal points. Example: 3.14, -2.5, 0.0  

(10) % - gives the remainder of a division operation. Example: 10 % 3 = 1

(11) == - checks for equality of value only. Example: 5 == "5" returns true

(12) === - checks for equality of both value and data type. Example: 5 === "5" returns false

(13) != - checks if values are different. Example: 5 != "5" returns false

(14) !== - checks if values and data types are different. Example: 5 !== "5" returns true

(15) ! - reverses a boolean value. Example: !true returns false, !false returns true