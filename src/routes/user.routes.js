// import { Router } from "express";
// import { registerUser } from "../controllers/user.controller.js";

// const router = Router();

// router.route("/register").post(registerUser);

// export default router;

import { Router } from "express";
import {
  refreshAccesstoken,
  registerUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlware.js"; // Correct import path
import { verifyJWT } from "../middlewares/auth.middlware.js";
import { loginUser, logoutUser } from "../controllers/user.controller.js";

const router = Router();
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logoutUser);

console.log("User routes initialized"); // Debugging

router.route("/refresh-token").post(refreshAccesstoken);

export default router;
