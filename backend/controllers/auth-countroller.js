import User from "../models/user-model.js";
import bcrypt from "bcryptjs";

const home =async(req,res)=>{
    try {
        res
        .send("hello")
        .status(200);
    } catch (error) {
        console.log(error);
    }

}
const signup = async (req, res, next) => {
    try {
        const { Username, email, phoneno, password, cnfpassword } = req.body;

        const existUser = await User.findOne({ email: email });
        if (existUser) {
            const status = 409;
            const message = "Fill the details properly";
            const extraDetails = "User already exist";
            const error = {
                status,
                message,
                extraDetails,
            };
            return next(error);
        }

        if (password !== cnfpassword) {
            const status = 400;
            const message = "Fill the details properly";
            const extraDetails = "Passwords do not match";
            const error = {
                status,
                message,
                extraDetails,
            };
            return next(error);
        }

        const UserCreated = await User.create({ Username, email, phoneno, password });
        res.status(201).json({
            msg: "Signup successful",
            token: await UserCreated.generateToken(),
            user_id: UserCreated._id.toString(),
        });
        // console.log(UserCreated);
    } catch (error) {
        console.log(error);
        const status = 500;
        const message = "Internal Server Error";
        const extraDetails = error.message;
        const err = {
            status,
            message,
            extraDetails,
        };
        return next(err);
    }
};

const login =async(req,res,next)=>{
const {email,password}= req.body;
const userExist = await User.findOne({email});
if(!userExist)
    {
        // return res.status(404).json({msg:"Invalid credintial"});
        const status = 404;
            const message = "Fill the details properly";
            const extraDetails = "Invalid credintial";
            const error = {
                status,
                message,
                extraDetails,
            };
            return next(error);
    
    }
    const verify=await bcrypt.compare(password,userExist.password);
    if(verify)
        {
            res.status(202).json({
                msg:"login sucessfull",
                token:await userExist.generateToken(),
                user_id:userExist._id.toString()});
        }
        else{
            const status = 401;
            const message = "Fill the details properly";
            const extraDetails = "Invalid login id or password";
            const error = {
                status,
                message,
                extraDetails,
            };
            return next(error);
            // res.status(401).json({msg:"invalid login id or password"});
        }
}
export default {home,signup,login};