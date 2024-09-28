import express from "express";
import bookappointController from "../controllers/bookappoint-controller.js"
// import bookappointSchema from "../validators/bookappoint-validators.js";
// import validate from "../middleware/validator-middleware.js";
// validate(bookappointSchema),

const router=express.Router();
router.route("/appoint").post(bookappointController);
export default router;