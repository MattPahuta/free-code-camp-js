//  *** Free Code Camp *** //
// *********************** //

// **************************************** //
// *** Intermediate Algorithm Scripting *** //
// **************************************** //


// *** Sum all Odd Fibonacci Numbers 
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
function sumFibs(num) {

}



// *** Convert HTML Entities 
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {

  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&apos;',
    '"': '&quot;'
  }
  // with entities key object, split, map, and join
  return str
    .split('')
    .map(entity => entities[entity] || entity)
    .join('');


  // with entities key object, split, for...of loops, Object.entries, push, join
  const strArr = str.split('');
  const result = [];

  for (let char of strArr) {
    for (const [key, value] of Object.entries(entities)) {
      if (char === key) {
        char = value;
      }
    }
    result.push(char)
  }
  return result.join('')
}


// *** Sorted Union 
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

** get unique values from an array
var myArray = ['a', 1, 'a', 2, '1'];
var unique = myArray.filter((value, index, array) => array.indexOf(value) === index)

or:
let unique = [...new Set(myArray)]

*/
function uniteUnique(...arr) {
  // accept multiple arrays 
  // sort each array

  // with filter, ...arguments, flat, indexOf
  return [...arguments].flat().filter((item, i, arr) => {
    return arr.indexOf(item) === i;
  })


  // with ...new, Set, and flat()
  return [...new Set(arr.flat())];

  // with a for loops, arguments, indexOf, and push
  const finalArr = [];

  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i]; // get each individual arr within array of arrays
    // loop through the sub arrays
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexVal = arrayArguments[j];
      // check if the value is already on the final array
      if (finalArr.indexOf(indexVal) < 0) {
        finalArr.push(indexVal);
      }
    }
  }
  return finalArr;
}


// *** Missing letters
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/
function fearNotLetter(str) {
  // const alpha = "abcdefghijklmnopqrstuvwxyz";

  // with split, forEach, charCodeAt, and String.fromCharCode
  let currentCode = str.charCodeAt(0);
  let missing = undefined;

  str.split('').forEach(letter => {
    if (letter.charCodeAt(0) === currentCode) {
      currentCode += 1;
    } else {
      missing = String.fromCharCode(currentCode);
    }
  });
  
  return missing;

  // with a for loop, conditional, charCodeAt and String.fromCharCode
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i); // code of current char
    console.log('char code: ', charCode)
    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}


// *** DNA Pairing 
/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Examples:
pairElement("ATCGA") => [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Waiting: pairElement("TTGAG") => [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Waiting: pairElement("CTCTA") => [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/
function pairElement(str) {
  // with split, map, and a switch statement
  // return str.split('').map(char => {
  //   switch (char) {
  //     case 'G':
  //       return ['G', 'C']
  //       break;
  //     case 'C':
  //       return ['C', 'G']
  //       break;
  //     case 'A':
  //       return ['A', 'T']
  //       break;
  //     case 'T':
  //       return ['T', 'A']
  //       break;
  //   }
  // })

  // using a pairs object as a lookup, with split and map
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  return str.split('').map(char => [char, pairs[char]])

}

// *** Search and Replace 
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
- First argument is the sentence to perform the search and replace on.
- Second argument is the word that you will be replacing (before).
- Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

*/
function myReplace(str, before, after) {

  // find the index of 'before' in 'str'
  const index = str.indexOf(before);
  // check if first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // change the after word to be capitalized before using it:
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // change the after word to uncapitalized before using it:
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // now do the replace on the original str
  return str.replace(before, after)

}


// *** Pig Latin 
/*
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {

  // solution 2
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";

  // solution 1
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}


// *** Spinal Tap Case 
// * Using a Regular Expression *
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
Examples:
spinalCase("This Is Spinal Tap") => 'this-is-spinal-tap'
spinalCase("thisIsSpinalTap") => 'this-is-spinal-tap'
spinalCase("Teletubbies say Eh-oh") => 'teletubbies-say-eh-oh'
*/
function spinalCase(str) {

  // ** Solution 3
  return str
  // split the string at on of the following conditions: 
  // whitespace char [\s], underscore char [_], followed by an uppercase letter [?=[A-Z]]
    .split(/\s|_|(?=[A-Z])/)
    .join("-") // join with '-'
    .toLowerCase(); // make it all lowercase


  // ** Solution 2
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");



  // ** Solution 1
  // RegEx for white space and underscores
  const regex = /\s+|_+/g;
  // put a space before any encountered uppercase characters
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // replace space and underscore with '-'
  return str.replace(regex, '-').toLowerCase();

}


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