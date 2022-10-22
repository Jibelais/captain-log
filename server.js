const express = require ('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))


// New route
app.get('/logs/new', (req, res)=>{
    res.render('new.ejs')
})


// Listener
app.listen(port, () => {
    console.log("listening...")
})
