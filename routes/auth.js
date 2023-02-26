const express = require('express')

const router = express.Router()


const authControl = require('../controllers/auth')

router.use(express.urlencoded({ extended: true }));

router.get('/auth/signup' , authControl.auth_signup_get)
router.post('/auth/signup' , authControl.auth_signup_post)

router.get('/auth/signin' , authControl.auth_signin_get)
router.post('/auth/signin' , authControl.auth_signin_post)

router.get('/auth/logout' , authControl.auth_logout_get)

module.exports = router