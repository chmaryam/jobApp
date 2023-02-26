//get index - when user is logged in
exports.index_get = (req,res) =>{
    res.render('user/index')
}

// get user model

const User = require('../models/User')

//HTTP EDIT User - GET
exports.user_update_get = (req, res) => {
    User.findByIdAndUpdate(req.query.id)
    .then(users =>{
        res.render('user/edit' , {users})
    })
    .catch(err =>{
        console.log(err)
    })
    
}
//HTTP edit User - post
exports.user_update_post = (req , res) =>{
    console.log(req.body.id)
    User.findByIdAndUpdate(req.body.id, req.body)
    .then(()=> {
        res.redirect('/user/index')
    })
    .catch(err =>{
        console.log(err)
    })
}