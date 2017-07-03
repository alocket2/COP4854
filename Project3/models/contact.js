var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: false },
    address: {type: String, required: false},
    twitter: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Contact', schema);