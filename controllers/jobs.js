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
    res.redirect("/job/addJobOffers")
})
.catch((err) => {
    console.log(err);
    res.send("Please try again later!");
})
 }
// // HTTP GET - job By ID
// exports.job_view_get = (req, res )=> {
//      Job.findById(req.query.id)
//     .then(job => {
//          console.log(job.viewJob)
//          res.render("job/viewJob", {job});
//      })
//     .catch(err => {
//          console.log(err);
//      })
//  }
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