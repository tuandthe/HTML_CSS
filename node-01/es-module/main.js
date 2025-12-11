
import * as calculator from './calculator.js';
import { sayHello, sayGoodbye } from './greeting.js';

console.log('=== Calculator Module (ESM) ===');
console.log('Add: 10 + 5 =', calculator.add(10, 5));
console.log('Subtract: 10 - 5 =', calculator.subtract(10, 5));
console.log('Multiply: 10 * 5 =', calculator.multiply(10, 5));
console.log('Divide: 10 / 5 =', calculator.divide(10, 5));

console.log('\n=== Greeting Module (ESM) ===');
console.log(sayHello('Bob'));
console.log(sayGoodbye('Bob'));
