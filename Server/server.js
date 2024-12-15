const express = require('express')
const dbConnection = require ('./Utilities/dbConnection')
const cors = require ('cors')
const PORT = process.env.PORT || 6000;
const userRoute = require('./Routes/user.routes')
const app = express()
app.use(cors())
app.use(express.json())


app.use('api/users',userRoute)



  

app.listen(PORT)
