//CRUD API's

//Model
const Article = require('../models/Job')


//HTTP GET - load article form
exports.job_create_get = (req, res) => {
    res.render('job/viewJob')
}