import app from "./app.js"
import {connectDb} from "./config/dbconnection.js"
import Razorpay from "razorpay";

connectDb();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});


app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost ${process.env.PORT}:`);
  });