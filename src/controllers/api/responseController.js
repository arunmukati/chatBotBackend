const { responseModel, intentModel } = require('../../models');
const ResponseController = {
    addResponse: async (req, res, next) => {
        let body = req.body;
        responseModel.create({
            name: body.name,
            flowId: body.flowId ? body.flowId : '',
            buttons: body.buttons,
            userId: req.userId,
            text: body.text
        }).then((data) => {
            res.send({
                message: "Response Added Successfully",
                data: data
            })
        }).catch((error)=>{
             res.status(400).send({message: error.errors})
        })
    },
    getResponse: async (req,res,next)=>{
        let body = req.params.intentId;
        responseModel.find().where({userId: req.userId}).then((data) => {
            res.send({
                message: "Response Found Successfully",
                data: data
            })
        }).catch((error)=>{
             res.status(400).send({message: error.errors})
        })
    },
    deleteResponse: async (req,res,next)=>{
        let body = req.params.id;
      await  responseModel.deleteOne({_id : body},(error,data) => {
            if(error){
                res.status(400).send({message: error})
            }
            else if(!data){
                res.status(400).send({message: "Invalid Response Id"});
            }else{
                res.send({
                    message: "Response Deleted Successfully",
                    data: data
                })
                intentModel.updateMany({responseId: data.body},{$set:{responseId:null}},{ new: false },function(err, user) {
                   
                })
            }
        })
    },
    updateResponse: async(req,res,next)=>{
        let name = req.body.name;
        let text = req.body.text;
        let responseId = req.body.responseId;
        try{
                return await  responseModel.findOneAndUpdate({_id: responseId},{$set:{name:name,text:text}},{ new: false },function(err, user) {
                    res.status(200).send({
                        message: "Response Update Successfully" ,
                        data: user
                    })
                })
           
        }
        catch(err){
            console.log(err)
            return next(err);
        }
        
    },
}
module.exports = ResponseController;