import express from "express";
import {signUp, signin,google} from "../controllers/auth.controller.js"
const router=express.Router();

router.post("/signUp",signUp);
router.post("/signin",signin);
router.post("/google",google);


export default router;