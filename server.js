const express = require('express')
const app = express()
const connectDB = require('./config/database')
const gameRoutes = require('./routes/game')
// const apiRoutes = require('./routes/')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use('/css', express.static('src'))

app.use('/', gameRoutes)


app.listen(process.env.PORT, () =>{
    console.log('Server is running')
})