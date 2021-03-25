const path = require('path');

const config = require('./src/config/config.json');
// let env = 'development';
var baseUrl = 'http://localhost:3000';

module.exports = {
    sourcePath: path.join(__dirname, 'src'),
    // publicPath: path.join(__dirname, 'src', 'public'),
    modelsPath: path.join(__dirname, 'src', 'models'),
    baseUrl,
    publicUrl: baseUrl + '/public/',
    dbConfig: config.database['botTest'],
    prefixUrl: '',
    socketIO:undefined,
    mongourl:"mongodb+srv://arun:mongo@1998@cluster0.fivoy.mongodb.net/UserDatabase?retryWrites=true&w=majority",
    getSocketIO: function () {
        return this.socketIO;
    }
}