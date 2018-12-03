const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    workId     : { type: String, unique: true },
    docId      : { type: String, required: true },
    workType   : { type: String, required: true },
    ul         : { type: String, required: false },
    ur         : { type: String, required: false },
    ll         : { type: String, required: false },
    lr         : { type: String, required: false },
    fm         : { type: Boolean, required:false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('WorkEntry', schema);

//ul - upperleft
//ur - upperright
//ll - lowerleft
//lr - lowerright
//fm - full mouth