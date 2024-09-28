import express from "express";
import contactController from "../controllers/contact-controller.js"
import contactSchema from "../validators/contact-validators.js";
import validate from "../middleware/validator-middleware.js";

const router=express.Router();
router.route("/contact").post(validate(contactSchema),contactController);
export default router;
