
console.log('=== BÀI TẬP 2: CPU-bound Task Block Event Loop ===\n');

console.log('1. Start');

// Tác vụ nặng - block event loop
console.log('\n⏳ Bắt đầu tính toán nặng (2 tỷ phép tính)...');
const startTime = Date.now();

let result = 0;
for (let i = 0; i < 20000000000; i++) {
    result += i;
}

const endTime = Date.now();
console.log(`✅ Hoàn thành sau ${endTime - startTime}ms`);
console.log(`📊 Kết quả: ${result}`);

// Trong lúc vòng lặp chạy, các tác vụ khác bị chặn
setTimeout(() => {
    console.log('\n4. setTimeout - Chạy SAU KHI vòng lặp xong');
}, 0);

Promise.resolve().then(() => {
    console.log('3. Promise - Chạy SAU KHI vòng lặp xong');
});

console.log('2. End');

