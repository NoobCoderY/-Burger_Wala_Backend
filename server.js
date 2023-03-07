import app from "./app.js"
import {connectDb} from "./config/dbconnection.js"

connectDb();








app.listen(8080, () => {
    console.log(`Server is working on http://localhost 8080:`);
  });