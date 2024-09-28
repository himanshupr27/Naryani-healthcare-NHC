import bookAppoint from "../models/bookappoint-model.js";
import User from "../models/user-model.js";

const appointmentForm = async(req,res,next)=>{
    try {
        const response = req.body;
        const existUser = await User.findOne({email:response.email});
        if(!existUser){
            // return res.status(404).json({msg:"User does not exist, go and sign up first"});
            const status = 500;
            const message = "User does not exist";
            const extraDetails = "Go and sign up first";
            const err = {
            status,
            message,
            extraDetails,
        };
        return next(err);
        }
        const appointment = await bookAppoint.create(response);
        res.status(202).json({msg:"Appointment booked Sucessfully"});
    } catch (error) {
        console.log(error);
        // res.status(404).json({msg:error});
        const status = 500;
        const message = "Appointment Form Error";
        const extraDetails = error.message;
        const err = {
            status,
            message,
            extraDetails,
        };
        return next(err);
    }
};
 export default appointmentForm;