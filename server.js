const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const Logs = require('./models/logs')
const port = 3000

require('dotenv').config()

const PORT = process.env.PORT
mongoose.connect(process.env.DATABASE_URL)

//middleware
app.use(express.urlencoded({ extended: true }))

// Database Connection Logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))



// Index route
app.get('/logs', (req, res)=>{
   Logs.find({}, (err, allLogs)=>{
    res.render('index.ejs', {logs:allLogs})
   })
})

// New route
app.get('/logs/new', (req, res)=>{
    res.render('new.ejs')
})

// Create route
app.post('/logs', (req, res)=>{
    req.body.shipIsBroken = (req.body.shipIsBroken ==="on")? true : false
    Logs.create(req.body, (err, createdLog)=> {
        res.redirect('show.ejs')
})
})

// Listener
app.listen(port, () => {
    console.log("listening...")
})
