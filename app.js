import express, { urlencoded } from "express";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import cors from "cors";

const app = express();
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
//imports Routes
import userRouter from "./routes/user.js";
import orderRouter from "./routes/order.js"


app.use(cookieParser());

app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(session({secret:"snljbfjbjbdjbj,m m, ,m ,mn ,f,r,j a,jw fma hm ", resave: false,
saveUninitialized: false,}))

// app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
connectPassport();
app.use("/", userRouter);
app.use("/api/v1",orderRouter)

app.use(errorMiddleware)

export default app;
