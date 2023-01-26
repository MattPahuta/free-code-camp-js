console.log("es6 scripts connect!")

// *** Write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(x => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray)
console.log(squareList) // => [16, 1764, 36]


// *** Rest Parameter with Function Parameters
const sum = (...args) => {
  // const args = [...args]; this line from original can be omitted
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(0,1,2));
console.log(sum(1,2,3,4));

// *** Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // copy contents of arr1 to another array (arr2)

console.log(arr2);

// *** Destructuring Assignment to Extract Values from Objects
// Destructuring creates variables directly corresponding to respective object values (extracting)

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line

// *** Destructuring Assignment to Assign Variables from Objects
const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
// get the value of HIGH_TEMPERATURES.today and assign it to a new variable named highToday....

// *** Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
// const { today: { low: lowToday, high: highToday} } = LOCAL_FORECAST; // one line to handle both variable assignments above
// Only change code above this line

// *** Destructuring Assignment to Assign Variables from Arrays
// swap values of a and b so a gets value of b, b gets value of a:
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

// *** Destructuring Assignment with Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [,, ...arr] = list; // arr is a sub-array of original array with first two elements omitted
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

// *** Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0; // destructuring stats to pass tow of its attributes
console.log(half(stats)); // => results in 28.015
// Only change code above this line

// *** Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [] = arr.map(item => `<li class="text-warning">${item}</li>`);
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// *** Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name, // name: name,
    age, // age: age,
    gender // gender: gender
  };
  // Only change code above this line
};

// *** class Syntax to Define a Constructor Function
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// *** Use getters and setters to Control Access to an Object
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }

  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius