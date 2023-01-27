//  *** Free Code Camp *** //
// *********************** //

// **************************************** //
// *** Intermediate Algorithm Scripting *** //
// **************************************** //

// *** Wherefore art thou
// *** (Find matching Objects in an array of objects)
/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
  ], 
  and the second argument is { last: "Capulet" }, 
  
  then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

*/
function whatIsInAName(collection, source) {
  // take in a collection - an array of objects
  // take in an object of key/value pairs (source)
  // loop over the collection and see if any of the objects contain the all of the key/value pairs of the source object
  // return an array of the matching collection objects 
  // return an empty object if no matches 

  // with a for loop, for...in loop, push
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    let found = true;
    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        found = false;
        break;
      }
    }
    if (found) result.push(collection[i])
  }
  return result;

  const sourceKeys = Object.keys(source);

  // with filter, every, and hasOwnProperty
  return collection.filter(obj => {
    return sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  })


  // with filter, for loop, conditional, and hasOwnProperty
  // return collection.filter(obj => {
  //   for (let i = 0; i < sourceKeys.length; i++) {
  //     if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // })

}


// *** Seek and Destroy 
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) => [1,5,1]
destroyer(["tree", "hamburger", 53], "tree", 53) => ["hamburger"].
*/

function destroyer(arr) {

  // using Array.from, arguments, slice, filter, and includes
  const valsToRemove = Array.from(arguments).slice(1)
  return arr.filter(el => !valsToRemove.includes(el));

  // With Object.values and nested for loops, conditional
  // const valsToRemove = Object.values(arguments).slice(1);
  // const filteredArray = [];

  // for (let i = 0; i < arr.length; i++) {
  //   let removeElement = false;
  //   for (let j = 0; j < valsToRemove.length; j++) {
  //     if (arr[i] === valsToRemove[j]) {
  //       removeElement = true;
  //     }
  //   }
  //   if (!removeElement) {
  //     filteredArray.push(arr[i]);
  //   }
  // }
  // return filteredArray;
}




// *** Diff Two Arrays 
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
function diffArray(arr1, arr2) {
  // with concat, filter, and includes
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item))

  // with helper function and nested for loop
  const newArr = [];

  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i])
      }
    }
  }

  onlyInFirst(arr1, arr2)
  onlyInFirst(arr2, arr1)

  return newArr;

}



// *** Sum All Numbers in a Range 
/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
  // accept an array of two numbers 
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;

  // [4,1] => 1, 2, 3, 4 => 10
  // [5,10] => 5,6,7,8,9,10 => 45
}



// ***************************** //
// *** Algorithm Scripting 1 *** //
// ***************************** //

// *** Chunky Monkey
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
  const groupedArr = [];
  // use push()
  // use slice(start, end)
  // for (let i = 0; i < arr.length; i += size) { // loop to generate numbered indices for the slice
  //   groupedArr.push(arr.slice(i, i + size)); // push each slice to groupedArr
  // }
  // return groupedArr;

  // use while loop, push, and splice
  while (arr.length > 0) { // while there are elements in the array
    groupedArr.push(arr.splice(0, size)); // start at beginning of array, splice off size number, push
  }
  return groupedArr;

  // using recursive function
  // if (arr.length <= size) { // handle arrays smaller than size
  //   return [arr];
  // } else { // else, split in two
  //   return [arr.slice(0, size)].concat( // first slice concat with 
  //     chunkArrayInGroups(arr.slice(size), size) // second segment which makes recursive call
  //   );
  // }
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // => [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // => [[0, 1, 2, 3], [4, 5]]

// *** Mutations
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien
*/
function mutation(arr) {
  // make everything lowercase for ease of comparison
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  // use a loop and indexOf() to check if the letter of second word is in the first
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false; // if all chars of test are not in target, return false
  }
  return true; // if all chars of test are in target, return true

  // use split() and every()
  return arr[1] // get second word
    .toLowerCase() // make it lowercase
    .split("") // split into an array of letters
    .every(letter => { // use every to test if all letters pass the test below
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    })
}


// *** Where do I Belong
/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(arr, num) {
  // // sort the array
  // const sortedArr = arr.sort((a,b) => a - b); 
  // // loop through sorted array and find first element >= to num
  // for (let i = 0; i < sortedArr.length; i++) {
  //   if (sortedArr[i] >= num) {
  //     return i; // return the index (i) of array
  //   } 
  // }
  // return sortedArr.length;

  // ** with filter
  // filter number of values smaller than 'num', return length of resulting array which would be the target index
  // return arr.filter(val => num > val).length; 

  // ** with method chaining - concat, sort, indexOf
  return arr
    .concat(num)
    .sort((a,b) => a - b)
    .indexOf(num);

}

getIndexToIns([40, 60], 50); // => 1
getIndexToIns([20,3,5], 19); // => 2

// *** Falsy Bouncer 
/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
function bouncer(arr) {

  // with a for...of loop
  // let truthyArr = [];
  // for (let el of arr) {
  //   if (el) truthyArr.push(el);
  // }
  // return truthyArr;

  return arr.filter(Boolean); // using filter with the built-in Boolean function
}

// *** Slice and Splice 
/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  // slice(start, end)
  // splice(start, deleteCount, elementToAdd1, elmentToAdd2, etc...)

  // use a for loop
  // let localArray = arr2.slice(); // make a copy of arr2
  // for (let i = 0; i < arr1.length; i++) { // loop over arr1
  //   localArray.splice(n, 0, arr1[i]); // splice in arr1 elements starting at n
  //   n++; // increment n to ensure each arr1 element is inserted in proper order
  // }
  // return localArray;

  // using spread syntax
  // let localArr = arr2.slice();
  // localArr.splice(n, 0, ...arr1);
  // return localArr;
  
  // with slice and spread only
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];

}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) 
// => should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
frankenSplice([1, 2, 3], [4, 5], 1) // =>  [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) // =>  ["a", 1, 2, "b"].


// *** Title Case a Sentence 
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  // with standard for of loop
  const strArr = str.split(' ');
  const newStrArr = [];
  for (let i = 0; i < strArr.length; i++) {
    newStrArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
  }
  return newStrArr.join(' ');


  // with a for...in loop
  // const splitStr = str.split(' ');
  // const newStrArr = [];
  // for (let word in splitStr) {
  //   newStrArr[word] = splitStr[word][0].toUpperCase() + splitStr[word].slice(1).toLowerCase();
  // }
  // return newStrArr.join(' ');

  // using .map() method
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
  //   .join(" ");
}


// *** Boo who
/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/
function booWho(bool) {
  // use typeof to check bool value passed in
  return typeof bool === 'boolean'; // returns true if it's a boolean
  // returns false if not
}

// *** Finders Keepers
/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
function findElement(arr, func) {
  // with for loop
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;

  // with .find() method
  return arr.find(func);

  // with .map() method
  return arr[arr.map(func).indexOf(true)];
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) // => 8

// *** Truncate a String
/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
  // slice(startIndex, endIndex)
  // if (str.length <= num) {
  //   return str;
  // } else {
  //   return str.slice(0, num) + "...";
  // }

  // with a ternary
  return str.length > num ? str.slice(0, num) + "..." : str;
}


// *** Repeat a string repeat a string
// repeat a string (str) a number (num) of times
// don't use built-in .repeat() method
function repeatStringNumTimes(str, num) {
  // let repeatedStr = "";
  // for (let i = 0; i < num; i++) {
  //   repeatedStr += str;
  // }
  // return repeatedStr;

  // using recursion
  if (num < 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }

}

// *** Confirm the Ending 

/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, but don't do that.
*/

function confirmEnding(str, target) {
  // using slice(startIndex)
  // slice(-target-length) => starte from the end, going back by length count 
  // compare the end of str to target
  return str.slice(-target.length) === target;

  // more descriptive version:
  // return str.slice(str.length - target.length) === target;

}

confirmEnding("Bastian", "n") // => true
confirmEnding("Open sesame", "sage") // => false


/*
Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/
function largestOfFour(arr) {
  // // Procedural apprach
  // let results = [];
  // for (let i = 0; i < arr.length; i++) {
  //   let largestNum = arr[i][0]; // initialize as first num of each array
  //   for (let j = 1; j < arr[i].length; j++) {
  //     if (arr[i][j] > largestNum) {
  //       largestNum = arr[i][j];
  //     }
  //   }
  //   results[i] = largestNum;
  // }
  // return results;

  // Declarative approach
  return arr.map(group => {
    return group.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    });
  });

}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // => [27, 5, 39, 1001]

// *** Find the Longest Word in a String
function findLongestWordLength(str) {
  // *** using a for loop
  // let words = str.split(' ');
  // let maxLength = 0;

  // for (let i = 0; i < words.length; i++) {
  //   if (words[i].length > maxLength) {
  //     maxLength = words[i].length;
  //   }
  // }
  // return maxLength;

  // *** using reduce()
  // return str.split(' ')
  //   .reduce((longest, word) => {
  //     return Math.max(longest, word.length)
  //   }, 0);

  // *** using Math.max, map(), and spread operator
  // split str into array with split
  // create a new array of word lengths with map
  // pass word length array into Math.max method with a spread operator
  return Math.max(...str.split(' ').map(word => word.length));
}


// *** Factorialize a Number
function factorialize(num) {
  // using a for loop
  // let product = 1;
  // for (let i = 2; i <= num; i += 1) {
  //   product *= i;
  // }
  // return product;

  // using recursion
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}