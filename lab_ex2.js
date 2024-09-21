// Name: Karm Patel
// Student ID: 101410114

// Exercise 1

const greeter = (myArray, counter) => {
    const greetText = 'Hello';
    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2

const capitalize = str => {
    const [firstChar, ...rest] = str;
    
    return `${firstChar.toUpperCase()}${rest.join('').toLowerCase()}`;
};

console.log(capitalize('fooBar')); // Output: Foobar
console.log(capitalize('nodeJs')); // Output: Nodejs

// Exercise 3

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors); // Output: ['Red', 'Green', 'Blue']

// Exercise 4

var values = [1, 60, 34, 30, 20, 5]

var filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20)
//Output
// [1, 5]

// Exercise 5

var array = [1, 2, 3, 4]

// Calculate sum
var calculateSum = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

// Calculate product

var calculateProduct = array.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);

console.log(calculateSum);
console.log(calculateProduct);


// Exercise 6

class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `Model: ${this.model}, Year: ${this.year}`;
    }
  }

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());


// Subclass - extends Car super class

class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year); 
      this.balance = balance;
    }
  
    info() {
      return `${super.details()}, Balance: ${this.balance}`;
    }
  }

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
