const { userModel,intentModel,responseModel } = require('../../models');
const { NlpManager } = require('node-nlp');
var path = require('path');
const manager = new NlpManager({ languages: ['en'], forceNER: true });
const fs = require('fs');
modelpath = '/../../nlpModels/'
const TrainigController = {
    train : async(req,res,next)=>{
        let userId = req.userId;
        let intents = await intentModel.find({ userId : userId});
        let responses = await responseModel.find({userId: userId});
       try {
        manager.load(modelpath + userId +'.nlp');
       } catch (error) {
        var createStream = fs.createWriteStream(path.resolve(__dirname + modelpath+userId+'.nlp'));
        createStream.end();
       }
       intents.forEach(ele => {
        manager.addDocument('en',ele.name, ele._id);
        ele.examples.forEach(el=>{
            manager.addDocument('en',el.exampleName,ele._id);
        })
        if(ele.responseId){
            // console.log(responses,ele.responseId,responses.findIndex(x=> x._id == "604a2cfefc3bf93d24f6f05d"),responses.find(x=> x._id == ele.responseId.toString()))
            manager.addAnswer('en',ele._id,responses.find(x=> x._id == ele.responseId.toString()));
        }
    });






    //    response.forEach(ele=>{

    //    })
// Adds the utterances and intents for the NLP
// manager.addDocument('en', 'goodbye for now', 'greetings.bye');
// manager.addDocument('en', 'bye bye take care', 'greetings.bye');
// manager.addDocument('en', 'okay see you later', 'greetings.bye');
// manager.addDocument('en', 'bye for now', 'greetings.bye');
// manager.addDocument('en', 'i must go', 'greetings.bye');
// manager.addDocument('en', 'hello', 'greetings.hello');
// manager.addDocument('en', 'hi', 'greetings.hello');
// manager.addDocument('en', 'howdy', 'greetings.hello');

// Train also the NLG
// manager.addAnswer('en', 'greetings.bye', 'Till next lol3 time');
// manager.addAnswer('en', 'greetings.bye', 'see you soon!');
// manager.addAnswer('en', 'greetings.hello', 'Hey there!');
// manager.addAnswer('en', 'greetings.hello', 'Greetings!');

// Train and save the model.
(async() => {
    await manager.train();
    manager.save(path.resolve(__dirname + modelpath+userId+'.nlp'));
    // const response = await manager.process('en', 'I should go now');
    // console.log(response);
    // console.log("new");
    // console.log(await manager.process('en',"bye for now"));
})();

        res.send({
            message: "Training Started",
            dataResponse: responses,
            dataIntent: intents
        })
    },
    getMessage: async (data)=>{
        return new Promise(async (resolve,reject)=>{
        let userId = data.userId;
        try {
            manager.load(path.resolve(__dirname + modelpath+userId+'.nlp'));
           } catch (error) {
            console.log("new Model");    
           }
           let msg =  await manager.process('en', data.text);
          resolve(msg);
    })
    }
}
module.exports = TrainigController;