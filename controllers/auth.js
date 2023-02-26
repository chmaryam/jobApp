//packages
const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('../lib/passportConfig')


//signup - GET
exports.auth_signup_get = (req,res) =>{
    res.render('auth/signup')
}


//signup - POST
exports.auth_signup_post = (req,res) =>{
    let user = new User(req.body)
    console.log(user)
    let hash = bcrypt.hashSync(req.body.password , 8)
    user.password = hash

    user.save()
    .then(() =>{
        res.redirect('/auth/signin')
    })
    .catch((err) =>{
        console.log(err)
        res.send('missing input or wrong! please try again!')
    })
} 


//signin - GET
exports.auth_signin_get = (req,res) =>{
    res.render('auth/signin')
}


// authonticating for sigin -POST
exports.auth_signin_post = passport.authenticate('local' , {
    successRedirect: '/index', //this is like the home page
    failureRedirect: '/auth/signin'
})


//log out
exports.auth_logout_get = (req,res) =>{
    req.logout(function(err){
        if(err){
            return next(err)
        }
    })
    res.redirect('/')
}