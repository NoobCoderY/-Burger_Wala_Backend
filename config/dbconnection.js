import mongoose from "mongoose";

export const connectDb=async()=>{
       await mongoose.connect("mongodb://localhost:27017/mba-burger-wala").then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`)
       }).catch((err)=>{
        console.log(err);
       })
}