
const { intentModel } = require('../../models');
var ObjectId = require('mongodb').ObjectID
const IntentController = {
    addIntent: async (req, res, next) => {
        let body = req.body;
        intentModel.create({
            name: body.name,
            userId: req.userId,
            responseId: body.responseId
        }).then((data) => {
            res.send({
                message: "Intent Added Successfully",
                data: data
            })
        }).catch((error)=>{
             res.status(400).send({message: error.errors})
        })
    },
    getIntent: async (req,res,next)=>{
        console.log(req.userId)
        intentModel.find().where({userId: req.userId}).populate('responseId').then((data) => {
            res.send({
                message: "Intent Found Successfully",
                data: data
            })
        }).catch((error)=>{
             res.status(400).send({message: error.errors})
        })
    },
    updateIntent : async(req,res,next)=>{
        let body = req.body.intentId;
        let name = req.body.name;
        let responseId = req.body.responseId;
        if(!name && !responseId){
            return res.status(400).send({
                message: "Update Denied" 
            })
        }
        try{
            if(name && responseId){
                return await  intentModel.findOneAndUpdate({_id: body},{$set:{name:name,responseId:responseId}},{ new: false },function(err, user) {
                    res.status(200).send({
                        message: "Response Update Successfully" ,
                        data: user
                    })
                })
            }
            if(name){
                return  await  intentModel.findOneAndUpdate({_id: body},{$set:{name:name}},{ new: false },function(err, user) {
                     res.status(200).send({
                        message: "Response Update Successfully" ,
                        data: user
                    })
                })
            }
            if(responseId ){
                return  await  intentModel.findOneAndUpdate({_id: body},{$set:{responseId:responseId}},{ new: false },function(err, user) {
                    res.status(200).send({
                        message: "Response Update Successfully" ,
                        data: user
                    })
                })
            }
        }
        catch(err){
            console.log(err)
            return next(err);
        }
        
    },
    deleteIntentResponse: async(req,res,next)=>{
        let body = req.body.intentId;
        await  intentModel.findOneAndUpdate({_id: body},{$set:{responseId:null}},{ new: false },function(err, user) {
            return res.status(200).send({
                message: "Response Update Successfully" ,
                data: user
         })})
    },
    deleteIntent: async (req,res,next)=>{
        let body = req.params.id;
        intentModel.findByIdAndDelete({_id : body},(error,data) => {
            console.log(error,data)
            if(error){
                res.status(400).send({message: error})
            }
            else if(!data){
                res.status(400).send({message: "Invalid Intent Id"});
            }else{
                res.send({
                    message: "Intent Deleted Successfully",
                    data: body
                })
            }
           
        })
    },
    addExample: async (req, res, next) => {
        let body = req.body;
        let id = body.intentId;
         intentModel.findOneAndUpdate({_id:id},{$push: { examples: {  exampleId : ObjectId(),exampleName : body.name } }},{ new: true }).then((data) => {
            // console.log("z",error);
            if(!data){
                res.send({
                            message: "Invalid Intent ID"
                        })
            }
            return Promise.resolve(data)
            
        }).then((data)=>{
            res.send({
                        message: "Example Added Successfully",
                        data: data
                    })

        }).catch((error)=>{
             res.status(400).send({message: error.errors})
        })
    },
    deleteExample: async (req,res,next)=>{
        let body = req.body;
        intentModel.findOneAndUpdate({_id : body.intentId},  { $pull: { examples: { exampleId: body.exampleId } } },function(error,data){
            if(error){
                res.status(400).send({message: error})
            }
            else if(!data){
                res.status(400).send({message: "Invalid Intent Id"});
            }else{
                res.send({
                    message: "Intent Deleted Successfully",
                    data: body
                })
            }
           
        })
    },
}
module.exports = IntentController;