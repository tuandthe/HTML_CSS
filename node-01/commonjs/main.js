
const calculator = require('./calculator');
const greeting = require('./greeting');

console.log('=== Calculator Module ===');
console.log('Add: 10 + 5 =', calculator.add(10, 5));
console.log('Subtract: 10 - 5 =', calculator.subtract(10, 5));
console.log('Multiply: 10 * 5 =', calculator.multiply(10, 5));
console.log('Divide: 10 / 5 =', calculator.divide(10, 5));

console.log('\n=== Greeting Module ===');
console.log(greeting.sayHello('Alice'));
console.log(greeting.sayGoodbye('Alice'));