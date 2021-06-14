const ChatController = require("../api/chatController");
const TrainigController = require("../api/trainingController");

module.exports = function (io) {
    io.on('connection', (socket) => {
        socket.on('joinchannel',(channelId)=>{
            socket.join(channelId);
        });
        socket.on('message', async (msg) => {
         await ChatController.textRecieved(msg).then(async data=>{
            if(data.name){
                io.to('agent-'+ msg.userId).emit('message',{fromUser: true,agentTakeover: data.data.agentTakeover, ...msg,name: data.name,data:data.data});
            }else{
                io.to('agent-'+ msg.userId).emit('message',{fromUser: true,agentTakeover:data.data.agentTakeover, ...msg});
            }
            if(!data.data.agentTakeover){
                io.to('user-'+ msg.userChatId).emit('typing','');

              await  TrainigController.getMessage({userId: msg.userId,text:msg.text}).then(botresponse=>{
                  let text = "Sorry,I didn't understand this!"
                  if(botresponse.answer){
                    text = botresponse.answer.text;
                  }
                  let msgTosend = {text:text, timestamp: new Date().getTime(), userId: msg.userId,userChatId:msg.userChatId};
                  console.log(msg.userChatId);
                 io.to('user-'+ msg.userChatId).emit('message',msgTosend);
                 ChatController.textSend(msgTosend);
                 io.to('agent-'+ msg.userId).emit('message',{fromUser: false, ...msgTosend});
              })
            }
         });
        });
        socket.on('response', (msg) => {
            ChatController.textSend(msg);
            console.log("response",msg);
            io.to('user-'+ msg.userChatId).emit('message',msg);
         });
         socket.on('agentTakeover', (data) => {
             console.log(data);
            ChatController.agentTakeover(data);
         });
    });
  
}