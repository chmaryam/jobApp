//default in every route
const express = require('express')
const router = express.Router();

const layoutControl = require('../controllers/layout')

//calling API's
router.get('/', layoutControl.layout_get)



//default in every routs (export)
module.exports = router;