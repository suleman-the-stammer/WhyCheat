const express = require('express')
const dbConnection = require ('./Utilities/dbConnection')
const cors = require ('cors')
const Morgen = require("morgan")
const PORT = process.env.PORT || 3000;
const userRoute = require('./Routes/user.routes')
const QuizRoute = require('./Routes/quiz.routes')
const DashboardRoute = require('./Routes/dashboard.routes')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true})
app.use(Morgen("dev"))


app.use('/api/users',userRoute)
app.use('/api/quiz',QuizRoute)
app.use('/api/dashboard',DashboardRoute)



  

app.listen(PORT , ()=>{
    console.log("server is running at " , PORT);
})
