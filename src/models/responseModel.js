const { string } = require('joi');
const mongoose = require('mongoose');
const ResponseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    text: {
      type:String,
      required:true
    },
    buttons: [
      {
        payload: String,
        btnName: String
      }
    ],
    flowId: String,
    userId: String
    
});

module.exports = mongoose.model('responses', ResponseSchema);