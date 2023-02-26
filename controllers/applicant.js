const Applicant = require('../models/Applicant')

exports.applicant_create_get = (req, res) => {
    res.render('applicant/applyJob')
    // for getting all of the authors - this step after we did the author
    //it was only rendering now for the author we have to output the authors
    // Applicant.find()
    // .then((applicant) =>{
    //     res.render('applicant/applyJob' , {applicant})
    // })
    // .catch((err) =>{
    //     console.log(err)
    // })
    
}
