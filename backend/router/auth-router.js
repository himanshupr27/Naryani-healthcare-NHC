import express from "express";
import authcontroller from "../controllers/auth-countroller.js"
import validateSchema from "../validators/auth-validators.js";
import validate from "../middleware/validator-middleware.js";

const router=express.Router();
router.route("/").get(authcontroller.home);
router.route("/signup").post(validate(validateSchema.signupSchema),authcontroller.signup);
router.route("/login").post(validate(validateSchema.loginSchema),authcontroller.login);
export default router;