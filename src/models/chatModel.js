const mongoose = require('mongoose');
const ChatSchema = new mongoose.Schema({
    _id: String,
    userId: String,
    name:  String,
    email: String,
    userChatId: String,
    agentTakeover: Boolean,
    chats : [ ]
},{_id:false});

module.exports = mongoose.model('chats', ChatSchema);