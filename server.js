import app from "./app.js"
import {connectDb} from "./config/dbconnection.js"

connectDb();


app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost ${process.env.PORT}:`);
  });