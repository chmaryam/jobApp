const express = require('express')
const router = express.Router()

const applicantControl = require('../controllers/applicant')


router.get('/applicant/applyJob' ,applicantControl.applicant_create_get )

module.exports = router