import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import cookieparser from 'cookie-parser'
import blogRouter from './routes/blog.js'
import { config } from 'dotenv'
import cors from 'cors'
const app = express();


app.use(express.json()) //to accept json format
app.use(cookieparser()); // to accepts cookie use as middleware
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET",'POST',"PUT","DELETE"],
    credentials:true
}))
config({
    path:'./data/config.env'
}) 
const port = process.env.PORT
const URI = process.env.MONGO_URL
mongoose.connect(URI,{dbName:"MAJORPROJECT"}).then(()=>console.log("server is connected"))

app.use('/Backend/user',userRouter) //userrouter
 
app.use('/Backend/blog',blogRouter) //blogrouter

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})