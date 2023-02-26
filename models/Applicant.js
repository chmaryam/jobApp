const mongoose = require('mongoose')

const applicantSchema = mongoose.Schema({
    phone: String,
    CV: String,
    User: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

},{
    timestamps: true
})

//Model
const Applicant = mongoose.model('Applicant' , applicantSchema)

//export
module.exports = Applicant