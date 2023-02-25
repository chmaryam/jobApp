
const express = require('express')
const router = express.Router()

const jobCntrl = require('../controllers/jobs')

router.get('/job/applyjob', jobCntrl.job_create_get)

module.exports= router

