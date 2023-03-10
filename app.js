import express, { urlencoded } from "express";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import cors from "cors";
const app = express();

//imports Routes
import userRouter from "./routes/user.js";

app.use(cookieParser());
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(session({secret:"snljbfjbjbdjbj,m m, ,m ,mn ,f,r,j a,jw fma hm "}))

// app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
connectPassport();
app.use("/", userRouter);

export default app;
