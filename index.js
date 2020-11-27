// EX: 1

// Create a function that takes an array and returns the first element.
/*

getFirstValue([1, 2, 3]) ➞ 1
getFirstValue([80, 5, 100]) ➞ 80
getFirstValue([-500, 0, 50]) ➞ -500

*/

function first(array) {
  let anArray = [];
  anArray.push(array[0]);
  return anArray;
}
console.log(first([80, 5, 100]));


// EX: 2

// Write a function that converts hours into seconds.
/*

howManySeconds(2) ➞ 7200
howManySeconds(10) ➞ 36000
howManySeconds(24) ➞ 86400

*/

function convert(myNumber) {
  hour = Math.floor(myNumber / 3600);
  sec = myNumber % 3600;
  return(hour + "hours" + ":" + sec + "seconds:").toString();
}
console.log(convert(7200));


// EX: 4
/*
Create a function that takes a number as an argument, increments the number by +1 and returns the result.

addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2
*/

function add_by_one(){
  var n = 0;
  n++;
  return n;
}


// EX: 5
/*
Write a function that takes the base and height of a triangle and return its area.


triArea(3, 2) ➞ 3
triArea(7, 4) ➞ 14
triArea(10, 10) ➞ 50

*/

const baseSide = prompt('Enter the base of a triangle: ');
const heightSide= prompt('Enter the height of a triangle: ');

const area = (baseSide * heightSide) / 2;

console.log(
  `The area of the triangle is ${area}`
);