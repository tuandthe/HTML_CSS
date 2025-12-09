
console.log('=== BÀI TẬP 1: setTimeout vs Promise ===\n');

console.log('1. Start');

setTimeout(() => {
    console.log('5. setTimeout 0ms');
}, 0);

setTimeout(() => {
    console.log('6. setTimeout 100ms');
}, 100);

Promise.resolve().then(() => {
    console.log('3. Promise 1');
}).then(() => {
    console.log('4. Promise 2');
});

console.log('2. End');

console.log('\n📝 Giải thích:');
console.log('- Call Stack (đồng bộ): 1, 2');
console.log('- Microtask Queue (Promise): 3, 4');
console.log('- Macrotask Queue (setTimeout): 5, 6');
console.log('- Thứ tự: Call Stack → Microtask → Macrotask');
