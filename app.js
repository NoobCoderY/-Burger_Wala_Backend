import express from "express"
const app=express();

//imports Routes
import userRouter from "./routes/user.js"

app.use("/api/v1" ,userRouter)






export default app;