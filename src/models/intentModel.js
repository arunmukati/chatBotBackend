const { string } = require('joi');
const mongoose = require('mongoose');
const IntentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    examples : [],
    userId: String,
    responseId : {type: mongoose.Schema.Types.ObjectId, ref: 'responses'}
});

module.exports = mongoose.model('intents', IntentSchema);