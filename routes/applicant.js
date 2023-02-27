const express = require('express')
const router = express.Router()

const applicantControl = require('../controllers/applicant')


router.get('/applicant/applyJob' ,applicantControl.applicant_applyJob_get )
router.post('/applicant/applyJob' ,applicantControl.applicant_applyJob_post )

module.exports = router