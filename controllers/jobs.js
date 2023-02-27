//CRUD API's

//Model
const Job = require('../models/Job')



//HTTP GET - load article form
exports.job_create_get = (req, res) => {
    console.log('ok')
    res.render('job/addJobOffers')
}
// HTTP post - addjobOffer
 exports.job_create_post = (req, res) => {
 console.log(req.body);
 let job = new Job(req.body);
//   save

job.save()
.then(() => {
    res.redirect("/job/viewJob")
})
.catch((err) => {
    console.log(err);
    res.send("Please try again later!");
})
 }

// HTTP GET - Index
 exports.job_view_get = (req, res) => {
     Job.find()
     .then(jobs => {
         res.render("job/viewJob", {jobs}) // job: addjobOffers
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - job By ID
exports.job_edit_get = (req, res )=> {
    Job.findByIdAndUpdate(req.query.id)
   .then(job => {
        // console.log(job.detail)
        res.render("job/editJob", {job});
    })
   .catch(err => {
        console.log(err);
    })
}

// HTTP POST- JOb by ID

exports.job_edit_post = (req, res )=> {
    Job.findByIdAndUpdate(req.body.id,req.body)
   .then(job => {
        // console.log(job.detail)
        res.render("job/viewJob", {job});
    })
   .catch(err => {
        console.log(err);
    })
    


}

exports.job_show_get = (req, res )=> {
        Job.findById(req.query.id)
        .then(job => {
            res.render("job/detail", {job});
        })
        .catch(err => {
            console.log(err);
        })
    }

// HTTP DELETE - job
exports.job_delete_get = (req, res) => {
    Job.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/job/viewJob")
    })
    .catch(err => {
        console.log(err);
    })
}    
//HTTP GET - load applicant form
exports.applicant_create_get = (req, res) => {
   
    res.render('applicant/applyJob')
}