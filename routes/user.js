import express from "express"
import passport from "passport";
const router=express.Router();
import { myProfile,logout ,getAdminUsers ,getAdminStats} from "../controllers/userController.js";
import { isAuthenticated,authorizeAdmin } from "../middlewares/auth.js";


router.get(
    "/googlelogin",
    passport.authenticate("google", {
      scope: ["profile"],

    })
  );

  router.get(
    "/login", passport.authenticate("google"),(req,res,next)=>{
                    res.send("done")
    }
    
  )

  router.get("/me", isAuthenticated, myProfile);

  router.get("/logout", logout);

  router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers);

  router.get("/admin/stats",isAuthenticated,authorizeAdmin,getAdminStats)



export default router