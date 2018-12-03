const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    docId     : { type: String, unique: true },
    firstName : { type: String, required: true },
    lastName  : { type: String, required: true },
    city      : { type: String, required: true },
    state     : { type: String, required: true },
    address   : { type: String, required: true },
    phone     : { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Doctor', schema);