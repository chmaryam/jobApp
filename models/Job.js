const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title: {type: String, required: true},
    salary: {type: Number, required: true},
    organization: {type: String, required: true},
    description: {type: String, required: true},
    timeType: {type: String, required: true},
    location: {type: String, required: true},
 
}, 
{
    timestamps: true 
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job 