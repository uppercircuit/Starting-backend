import { Router } from "express";
import { loginUser, logoutUser, registerUser,refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { ApiError } from "../utils/ApiError.js";

const router =Router()

router.route("/register").post(
    upload.fields([{
       name:"avatar",
       maxCount:1
    },
    {
       name:"coverImage",
       maxCount:1
    }
    ]),
    registerUser)

router.route("/login").post(verifyJWT,logoutUser);
router.route("/logout").post(loginUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/").get((req,res) => res.json({"Text": "Hello"}))

export default router;  