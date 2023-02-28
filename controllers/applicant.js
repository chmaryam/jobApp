const Applicant = require('../models/Applicant')

exports.applicant_applyJob_get = (req, res) => {
    res.render('applicant/applyJob')
    // Applicant.find()
    // .then((applicant) =>{
    //     res.render('applicant/applyJob' , {applicant})
    // })
    // .catch((err) =>{
    //     console.log(err)
    // })

}

exports.applicant_applyJob_post = (req, res) => {
    let applicant = new Applicant(req.body)
        // applicant['job']= req.query.id
        // console.log(req.body.job_id)
        applicant.save()
        .then(() => {
            res.redirect('/job/viewJob')
        })
        .catch((err) => {
            console.log(err)
            res.send('missing input or wrong! please try again!')
        })
}
