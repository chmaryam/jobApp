const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title: {type: String, required: true},
    salary: {type: Number, required: true},
    organization: {type: String, required: true},
    description: {type: String},
    timeType: {type: String, required: true},
    location: {type: String, required: true},
    applicant : [{
        type : mongoose.Schema.Types.ObjectId,
        // taking the article name and spel from models/article lfrom model
        ref :  'Applicant '
    }]
 
}, 
{
    timestamps: true 
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job 