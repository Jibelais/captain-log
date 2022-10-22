const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    title: { type: String, required: true}, 
    entry: { type: String, required: true}, 
    shipIsBroken:{type: Boolean, default: true}

})

const Logs = mongoose.model("Logs", logSchema)

module.exports = Logs