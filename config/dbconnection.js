import mongoose from "mongoose";

export const connectDb=async()=>{
       await mongoose.connect(process.env.MONGO_URI).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`)
       }).catch((err)=>{
        console.log(err);
       })
}