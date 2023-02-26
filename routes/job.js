
const express = require('express')
const router = express.Router()

const jobCntrl = require('../controllers/jobs')

router.get('/job/addJobOffers', jobCntrl.job_create_get)
router.post('/job/addJobOffers', jobCntrl.job_create_post)
router.get("/job/viewJob", jobCntrl.job_view_get);
// router.get("/job/viewJob", jobCntrl.job_show_get);
module.exports= router

