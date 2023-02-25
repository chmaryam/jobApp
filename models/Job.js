const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title: String,
    salary: Number,
    organization: String,
    description: String,
    timeType: String,
    location: String,
 
}, 
{
    timestamps: true 
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job 