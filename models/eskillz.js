const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const EskillzSchema = new Schema({
    tokenID: {
      type: String,
      required: [true, 'tokenID field is required']
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    image_url: {
        type: String,
    },
    level: {
        type: String,
    },
    totalAmount: {
        type: String,
    },
    giveaway: {
        type: String,
    },
    sell: {
        type: String,
    }    
});


const Eskillz = mongoose.model('eskillz',EskillzSchema);

module.exports = Eskillz;