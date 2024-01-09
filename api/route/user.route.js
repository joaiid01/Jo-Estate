import express from "express";
import {test,updateUser} from "../controllers/user.controller.js"
import verifyToken from "../util/verify.user.js";
const route=express.Router();

route.get("/test",test);

route.post('/update/:id',verifyToken,updateUser)
export default route;