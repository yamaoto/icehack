const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    bus: { type: Number },
    num: { type: String },
    val: { type: Number },
    ids: { type: String },
    comment: { type: String }
});

module.exports = mongoose.model('Feedback', schema);
