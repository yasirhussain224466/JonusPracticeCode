const express = require('express')
const morgan = require('morgan')
const app = express()
const tourRouter = require('./Routes/TourRoute')
const userRouter = require('./Routes/UserRoute')


//MiddleWare
app.use(express.json())
app.use(morgan('dev'));
app.use((req,res,next)=>{
    console.log("Hello from the Middleware")
    next()
})




//Routes
app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)



//Start Server
module.exports = app