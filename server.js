const http = require('http');
const app = require('./app');
const mongooseDb = require('./src/db/db')
const server = http.createServer(app);
const gv = require('./global-variables');
gv.socketIO = require('socket.io')(server);
// var sio = require('socket.io')(server);
mongooseDb();
// sio.on('connection', (socket) => {
//     // Store socket ID
//     console.log("SSS")
//     var socketID = socket.conn.id;


  

//     // Disconnect event
//     socket.on('disconnect', () => {
//         console.log('Disconnected:', socketID);
//     });
// });

require('./src/controllers/socket/socketController')(gv.socketIO);

    const PORT = process.env.PORT || 3001;
server.listen(PORT);
server.on('listening', () => {
    console.log(`Server is working on http://localhost:${PORT}`);
})

module.exports = server