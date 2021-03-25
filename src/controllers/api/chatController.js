const { userModel } = require('../../models');
const chatModel = require('../../models/chatModel');
var rug = require('random-username-generator');
const ChatController = {
    textRecieved: async (msg) => {
        return new Promise(async (resolve,reject)=>{
            let id = msg.userChatId;
            let userId = msg.userId;
    
    
            await chatModel.findOneAndUpdate({ _id: id, userId: userId }, { $push: { chats: { text: msg.text, fromUser: true, timestamp: msg.timestamp } } }, { upsert: true, new: true }).then(async (data) => {
                if (!data.name) {
                    var new_username = rug.generate();
                    await chatModel.findOneAndUpdate({ _id: id }, { $set: { name: new_username,agentTakeover:false } }).then(data => {
                        resolve({name:new_username,data});
                    });
    
                } else {
                    resolve({data});
                }
                //  if(!data){
                //      chatModel.create({
                //          _id: id,
                //          userId: userId,
                //          chats: [{text: msg.text, fromUser: true}]    
                //      })
                //  }
            })
        })
      
    },
    textSend: async (msg) => {
        let id = msg.userChatId;
        let userId = msg.userId;
        await chatModel.updateOne({ _id: id, userId: userId }, { $push: { chats: { text: msg.text, fromUser: false, timestamp: msg.timestamp } } }, { upsert: true, new: true }).then((data) => {
        })
    },
    agentTakeover: async(data)=>{
        await chatModel.findOneAndUpdate({ _id: data.id, userId: data.userId }, { $set: {agentTakeover:data.agentTakeover } }, { upsert: true, new: true })

    },
    getChats: async (req, res, next) => {
        let userChatId = req.params.id;
        await chatModel.findById({ _id: userChatId }).then(data => {
            res.status(200).send({
                data: data
            })
        })
    },
    getAllUsers: async (req, res, next) => {
        let userId = req.userId;
        await chatModel.find().where({ userId: userId }).then(data => {
            res.status(200).send({
                data: data
            })
        })
    }

}
module.exports = ChatController;