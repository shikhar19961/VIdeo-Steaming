import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log(`App error: ${err}`)
        throw err
    })
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connect failed !!!",err);
})
/*
import express from "express"
const app = express()
;( async ()=>{
    try {
        await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
        app.on(error,()=>{
            console.log(`ERROR : ${error}`);
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(`ERROR: ${error}`)
        throw error;
    }
})()
*/