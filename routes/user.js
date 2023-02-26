//default in every route
const express = require('express')
const router = express.Router();

const userControl = require('../controllers/users')

//calling API's
router.get('/index', userControl.index_get)
router.get ('/user/edit',userControl.user_update_get)
router.get ('/user/edit',userControl.user_update_post)



//default in every routs (export)
module.exports = router;