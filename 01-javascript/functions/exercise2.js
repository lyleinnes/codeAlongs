// 1. Write a function lengths that accepts a single parameter as an argument, namely 
// an array of strings. The function should return an array of numbers where each 
// number is the length of the corresponding string.

// your code here

// myForEach(list, fn)
//2
//5
//11
// var numbers = [2,5,11]
// var doubleAndLog = function(num) {
//   console.log(num * 2);
// }

// // we can use doubleAndLog on one array element. as below
// // doubleAndLog(numbers[0]);

// var myForEach = function(arr, fn) {
//   for (var index = 0; index < arr.length; index ++) {
//     fn(arr[index]);
//   }
// }

// var myForEach(numbers, doubleAndLog) {



// myForEach(num, doubleAndLog) <-- this isnt calling the function, because no parenthesis at the end

// BELOW IS MY ANSWER TO Q.1

var lengths = function(stringArr) {
  var lengthsOfElms = [];

  stringArr.forEach( function(elem) {  // this forEach method essentially iterates through the array elements that
    lengthsOfElms.push(elem.length);   // and applies the function to each element

  }); // this replaces the below for loop

  // for (var i = 0; i < stringArr.length; i ++) {
  // lengthsOfElms.push(stringArr[i].length);
  // }

  return lengthsOfElms
}

// var names = ['how', 'are', 'we']; // [3,3,2]


// 2. Write a Javascript function called transmogrifier 
// This function should accept three arguments, which you can assume will be numbers. 
// Your function should return the "transmogrified" result 

// The transmogrified result of three numbers is the product of the first two numbers, 
// raised to the power of the third number.

//your code here


// 3. Write a function wordReverse that accepts a single argument, a string. The 
// method should return a string with the order of the words reversed. Don't worry 
// about punctuation.

// your code here