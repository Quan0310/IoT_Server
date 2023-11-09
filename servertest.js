// // // server.js
// // const WebSocket = require('ws');
// // const mysql = require('mysql2');
// // const express = require('express');
// // const app = express();
// // const port = 8099; // Cổng của máy chủ Node.js
// // app.use(function (req, res, next) {

// //     // Website you wish to allow to connect
// //     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

// //     // Request methods you wish to allow
// //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// //     // Request headers you wish to allow
// //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// //     // Set to true if you need the website to include cookies in the requests sent
// //     // to the API (e.g. in case you use sessions)
// //     res.setHeader('Access-Control-Allow-Credentials', true);

// //     // Pass to next layer of middleware
// //     next();
// // });

// // const db = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root',
// //     password: '123456',
// //     database: 'IoT'
// // });


// // wss.on('connection', ws => {
// //     console.log('Client connected');

// //     // Khi có kết nối WebSocket, gửi dữ liệu từ MySQL đến client
// //     db.query('SELECT * FROM your_table ORDER BY timestamp DESC LIMIT 1', (err, result) => {
// //         if (!err && result.length > 0) {
// //             ws.send(JSON.stringify(result[0]));
// //         }
// //     });

// //     ws.on('close', () => {
// //         console.log('Client disconnected');
// //     });
// // });

// // wss.on('connection', ws => {
// //     console.log('Client connected');

// //     // Khi có kết nối WebSocket, gửi dữ liệu từ MySQL đến client
// //     db.query('SELECT * FROM your_table ORDER BY timestamp DESC LIMIT 1', (err, result) => {
// //         if (!err && result.length > 0) {
// //             ws.send(JSON.stringify(result[0]));
// //         }
// //     });

// //     ws.on('close', () => {
// //         console.log('Client disconnected');
// //     });
// // });

// // db.connect(err => {
// //     if (err) {
// //         console.error('Lỗi kết nối cơ sở dữ liệu: ' + err);
// //         return;
// //     }
// //     console.log('Kết nối cơ sở dữ liệu thành công');
// // });
// // // Một API endpoint trả về các giá trị giả định
// // // app.get('/api/data', (req, res) => {
// // //     const data = {
// // //         temperature: 25,
// // //         humidity: 50,
// // //         lightIntensity: 780,
// // //     };
// // //     res.json(data);
// // // });

// // // app.listen(port, () => {
// // //     console.log(`Server is running on port ${port}`);
// // // });

// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');
// const mysql = require('mysql2');

// const app = express();
// const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

// // const db = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'your_username',
// //     password: 'your_password',
// //     database: 'your_database',
// // });

// // Cấu hình các route cho Express
// app.get('/', (req, res) => {
//     res.send('Hello, this is your Node.js server.');
// });

// // Cấu hình WebSocket server
// wss.on('connection', ws => {
//     console.log('Client connected to WebSocket server');
//     ws.send('Hello, this is your WebSocket server.');
// });


// server.listen(8123, () => {
//     console.log('Server is running on port 3000');
// });






const express = require("express");
const http = require("http");
const socketIo = require("socket.io")

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
    }
});
const messages = [];

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/', (req, res) => {
    res.send('hello world!!!');
})
// Xử lý kết nối từ phía máy khách
// io.on("connection", (socket) => {
//     console.log("A user connected");

//     // Gửi danh sách tin nhắn hiện tại cho máy khách mới kết nối
//     socket.emit("initMessages", messages);

//     // Nghe khi máy khách gửi tin nhắn mới
//     socket.on("sendMessage", (message) => {
//         // Thêm tin nhắn vào danh sách
//         messages.push(message);
//         // Gửi tin nhắn mới đến tất cả máy khách
//         io.emit("newMessage", message);
//     });

//     // Xử lý ngắt kết nối
//     socket.on("disconnect", () => {
//         console.log("A user disconnected");
//     });
// });

// Serve ứng dụng React
app.use(express.static("build"));
server.listen(8881, () => {
    console.log('listening on port 3456');
})