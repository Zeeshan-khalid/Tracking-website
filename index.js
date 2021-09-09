const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const path = require('path')
const user = require('./controllers/user')

// require('./db')

const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json({limit:'20mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'20mb', extended: false }))

app.use(express.static('public'))
app.use('/api/v1', user)



app.listen(port, () => {
    console.log(`[*] Your website is running on localhost:${port}`)
})