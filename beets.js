// Prep Course: Web Development Full Time
// Writing JavaScript - Hands On Exercises

// Exercise 1
var name = "Sydney";
console.log("Hello " + name);

// Exercise 2
var x = parseInt(1125);
var answer = (x % 2);
console.log(answer);

// Exercise 3
var a = true;
var b = false;
var c = true;
var parsnip = (a || b || c);
console.log(parsnip);

// Exercise 4
var potatoes = (a && b && c);
console.log(potatoes);

// Exercise 5
var answer1 = (10 - 3 * 5 / 4 + 202 % 3);
var answer2 = (10 - (3 * (5 / 4) + (202 % 3)));
console.log("Answer 1 = " + answer1 + " and answer 2 = " + answer2);

// Exercise 6
var one = "12";
var two = parseInt(113);
var three = parseFloat(1.12356);
var four = parseInt("HelloWorld");
console.log(four);

// Dive Deeper: Regular Expressions
var longStringOne = "I am a BrainStation student";
var longStringTwo = "I am a Student";
var longStringThree = "I am a BrainStation student";
var reOne = longStringOne.search("BrainStation");
var reTwo = longStringTwo.search("BrainStation");
var reThree = longStringThree.replace("BrainStation student", "Junior Developer");
console.log("BrainStation matches string 1: " + (reOne >=0) + ", string 2: " + (reTwo >=0));
console.log(longStringThree);
console.log(reThree);

