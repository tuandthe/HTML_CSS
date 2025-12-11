
const fs = require('fs');

console.log('=== BÀI TẬP 3: Non-blocking I/O ===\n');

console.log('1. Bắt đầu đọc file...');

// Đọc file bất đồng bộ - KHÔNG block
fs.readFile('package.json', 'utf8', (err, data) => {
    if (err) {
        console.error('❌ Lỗi đọc file:', err);
        return;
    }
    console.log('\n3. ✅ Đọc file xong!');
    console.log('📄 Nội dung file:');
    console.log(data);
});

console.log('2. Tiếp tục thực thi... (không bị chặn)\n');

// Thêm các tác vụ khác để demo non-blocking
setTimeout(() => {
    console.log('4. setTimeout chạy trong lúc đọc file');
}, 0);

Promise.resolve().then(() => {
    console.log('5. Promise cũng chạy ngay');
});

console.log('💡 Giải thích:');
console.log('- fs.readFile là I/O operation → Non-blocking');
console.log('- Code tiếp tục chạy ngay (dòng 2)');
console.log('- Callback được đưa vào queue');
console.log('- Khi file đọc xong → Callback chạy (dòng 3)');
