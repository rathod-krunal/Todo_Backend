import express from "express";
import { addUser, getMyProfile, login,  } from "../controllers/user.js";
import {isAuthenticated} from '../middlewares/auth.js'
const router = express.Router();


// add users
router.post("/new",addUser);
router.post("/login",login);

//FindUser And Edit And Delete
router.get("/me", isAuthenticated,getMyProfile)


//logout user
router.get("/logout",login);




export default router;
