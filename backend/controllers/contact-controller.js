import contact from "../models/contact-model.js";

const contactForm = async(req,res,next)=>{
    try {
        const response = req.body;
        const contacts = await contact.create(response);
        res.status(202).json({msg:"contact sent suceaafull"});
    } catch (error) {
        console.log(error);
        // res.status(404).json({msg:error});
        const status = 500;
        const message = "Contact Form Error";
        const extraDetails = error.message;
        const err = {
            status,
            message,
            extraDetails,
        };
        return next(err);
    }
};
 export default contactForm;