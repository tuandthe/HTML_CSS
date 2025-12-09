const http = require('http');

const server = http.createServer((req, res) => {
    // Log mỗi request
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Response khác nhau theo URL
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
      <html>
        <head><title>Node.js Server</title></head>
        <body style="font-family: Arial; padding: 20px;">
          <h1>Hello Node.js! </h1>
          <p>Server đang chạy tại: <strong>http://localhost:3000</strong></p>
          <h2>Thử truy cập:</h2>
        </body>
      </html>
    `);
    }


});
server.listen(3000, () => {
    console.log('✅ Server đang chạy tại http://localhost:3000');
    console.log('📝 Nhấn Ctrl+C để dừng server');
});