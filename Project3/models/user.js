var mongoose = require('mongoose');
var mongooseValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contacts: [{ type: Schema.Types.ObjectId, ref: 'Contact' }]
});

schema.plugin(mongooseValidator);

module.exports = mongoose.model('User', schema);