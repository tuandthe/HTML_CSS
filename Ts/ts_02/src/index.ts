import { car, introduce, Timer } from "./types/bindContext.js";
import { Circle } from "./types/circle.js";
import { API_URL, getFullApiUrl, HTTP_STATUS } from "./types/constants.js";
import { Customer, VIPCustomer } from "./types/customer.js";
import type { EmployeeWithTime, ResponseStatus } from "./types/employee.js";
import { safeDivide } from "./types/exhaustive.js";
import { filterArray, Queue } from "./types/generics.js";
import { ispaid, LogLevel, logLevel, OrderStatus } from "./types/orders.js";
import { updateProduct } from "./types/product.js";
import { capitalize, slugify, VALIDATION_RULES } from "./types/utils.js";

// EmployeeWithTime, ResponseStatus
const emp: EmployeeWithTime = {
  employeeId: 101,
  name: "Nguyen Van A",
  position: "Developer",
  createdAt: new Date()
};
const statusRes: ResponseStatus = "ok";

console.log(emp);
console.log(statusRes);

// Orderstatus Enum
const status1 = OrderStatus.Paid;
const status2 = OrderStatus.Cancelled;

console.log(status1, "is paid:", ispaid(status1));
console.log(status2, "is cancelled:", ispaid(status1));
console.log(logLevel(LogLevel.Info, "This is an info message"));
console.log(logLevel(LogLevel.Error, "This is an error message"));

// Generic Queue Class
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
const firstItem = queue.dequeue();
console.log("First item dequeued from queue:", firstItem);

// Generic Filter Function
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (n) => n % 2 === 0);
console.log("Even numbers:", evenNumbers);


// Test capitalize
console.log(capitalize("hello world")); // "Hello world"
console.log(capitalize("JAVASCRIPT"));    // "Javascript"

// Test slugify
console.log(slugify("Hello World!"));   // "hello-world"
console.log(slugify("User@Name#123"));  // "username123"

// Test validation
console.log(VALIDATION_RULES.email.test("user@example.com")); // true
console.log(VALIDATION_RULES.email.test("invalid-email"));

// Test constants
console.log("API URL:", API_URL);
console.log("Full API URL for 'users':", getFullApiUrl("users"));
console.log("HTTP Status OK:", HTTP_STATUS.OK);

//Customer class 
const customer = new Customer(1, "John Doe", "john.doe@example.com");
customer.greet();
customer.updateEmail("john.newemail@example.com");
console.log(customer);

// VIPCustomer class
const vipCustomer = new VIPCustomer(2, "Jane Smith", "jane.smith@example.com", "gold", 0.15);
vipCustomer.greet();
console.log("Discount:", vipCustomer.getDiscount());
console.log("Price after discount on $200:", vipCustomer.calculatePrice(200));

//circle class
const circle = new Circle(5);
console.log("Circle radius:", circle.radius);
console.log("Circle area:", circle.getArea());
console.log("Circle circumference:", circle.getCircumference());

//updateProduct 
const updated = updateProduct(1, { price: 99.99, inStock: true });
console.log("Updated Product:", updated);

// exhaustive
console.log("Safe Divide 10 / 2 =", safeDivide(10, 2));

// bindContext
const startFn = car.start.bind(car);
startFn();

// Class Async
const t = new Timer(1);
setTimeout(t.tick, 1000);

// Generic call/apply
const person = { name: "Alice" };
introduce.call(person, "Hello"); // "Hello, I am Alice"
introduce.apply(person, ["Hi"]); // "Hi, I am Alice"
