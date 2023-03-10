import express from "express"
import passport from "passport";
const router=express.Router();
import { myProfile,logout } from "../controllers/userController.js";


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

  router.get("/me", myProfile);

  router.get("/logout", logout);



export default router