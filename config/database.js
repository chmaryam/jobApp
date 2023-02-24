const mongoose = require('mongoose')
const dbURI = process.env.DATABASE_URI //we put this instead of putting the db because we want to ignore it so we take it from .env 

mongoose.connect(dbURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

const db =  mongoose.connection

db.on('connected', function(){
    console.log(`connected to mongooDB at ${db.host} : ${db.port}`)
})