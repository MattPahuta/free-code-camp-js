console.log('FCC scripts connected!')

// *** Recursion **** //
// ****************** //

// *** Recursion to Create Countdown 
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5));

// Use recursion to create a range of numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum -1);
    numbers.push(endNum);
    return numbers;
  }

  // with a ternary operator
  // return endNum < startNum
  //   ? []
  //   : rangeOfNumbers(startNum, endNum -1).concat(endNum);

}



// *** Random whole number 
const randomNumber = Math.floor( Math.random() * 6 ) + 1;  // random num between 1 and 6
// *** With min/max values
const randNumGenerator = Math.floor(Math.random() * (max - min + 1)) + min;

function testLogicalOr(val) {
  if (val > 20 || val < 10){
    return "outside";
  }
  return "inside";
}

// *** Golf Game *** 

// Strokes	Return
// ================
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }


  // Only change code above this line
}

golfScore(5, 4);
console.log(golfScore(4,1))

// *** Switch Statements *** 

function switchOfStuff(val) {
  var answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  return answer;
}

switchOfStuff(1);

function sequentialSizes(val) {
  var answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
}

sequentialSizes(1);

// *** Concise Boolean value evaluation in functions
function isLess(a, b) {
  return a < b; // returns a boolean true/false
}

isLess(10, 15);

function isEqual(a,b) {
  return a === b; // returns a boolean true/false
}

// Counting Cards 
function cc(card) {
  var count = 0;
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }

  if (count > 0) {
    return `${count} Bet`
  } 

  return `${count} Hold`

}

cc(2); cc(3); cc(7); cc('K'); cc('A');



function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// *** Testing Objects for Properties
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
  // Only change code above this line
}

// *** Record Collection - Object Update 
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // if prop isn't tracks and value isn't an empty string, update or set that album's prop to value
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  }
  // if prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
  else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
    records[id][prop] = [value];
  }
  // if prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
  else if (prop === 'tracks' && value !== "") {
    records[id][prop].push(value);
  }
  // if value is an empty string, delete the given prop property from the album
  else if (value === "") {
    delete records[id][prop]
  }
  
  return records;
}

// Alternative solution 
function updateRecordsSol2(records, id, prop, value) {
  if (value === '') delete records[id][prop];
  else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}



//              records         id    prop      value
// updateRecords(recordCollection, 5439, "artist", "ABBA") // artist shoudd be the string ABBA
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me") // tracks should have the string Take a Chance on Me as the last element
// updateRecords(recordCollection, 2548, "artist", "") // artist should not be set
// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love") // tracks should have the sting Addicted to Love as the last element
// updateRecords(recordCollection, 2468, "tracks", "Free") // tracks should have the string 1999 as the first element
// updateRecords(recordCollection, 2548, "tracks", "") // tracks should not be set
// updateRecords(recordCollection, 1245, "albumTitle", "Riptide") // albumTitle should be the string Riptide

// *** Replace Loops with Recursion ***
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sumRecur(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sumRecur(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

// *** Profile Lookup ***
// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop){
  // name = check if a contact's firstName, prop = property of that contact
  // If both are true, then return the "value" of that property.
  for (var i = 0; i < contacts.length; i += 1) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  // If name does not correspond to any contacts then return the string No such contact
  return 'No such contact';
}

// using for loop with hasOwnProperty() method
function lookUpProfile3(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }
  return 'No such contact';
}

// using for loop with in operator instead of hasOwnProperty() method
function lookUpProfile3(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }
  return 'No such contact';
}
  
lookUpProfile("Akira", "likes");

// *** Generate Random Whole Numbers within a Range
var min = 1;
var max = 10;
Math.floor(Math.random() * (max - min + 1)) + min;

// *** Ternary Operator - multiple conditions
function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
}



