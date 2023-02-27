const mongoose = require('mongoose')

const applicantSchema = mongoose.Schema({
    phone: String,
    CV: String,
    job: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }]

},{
    timestamps: true
})

//Model
const Applicant = mongoose.model('Applicant' , applicantSchema)

//export
module.exports = Applicant