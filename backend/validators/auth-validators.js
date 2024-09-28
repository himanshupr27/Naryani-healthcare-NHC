import {z} from "zod";

const signupSchema = z.object({
Username:z
    .string({required_error:"Username is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 chracter"})
    .max(300,{message:"Name must be not more than 300 chracter"}),
email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast 3 chracter"})
    .max(300,{message:"Email must be not more than 300 chracter"}),
phoneno:z
    .string({required_error:"Phone No. is required"})
    .trim()
    .min(10,{message:"Phone No. must be atleast 3 chracter"})
    .max(300,{message:"Phone No. must be not more than 300 chracter"}),
password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(3,{message:"Password must be atleast 3 chracter"})
    .max(300,{message:"Password must be not more than 300 chracter"}),
cnfpassword:z
    .string({required_error:"Confirm Password is required"})
    .trim()
    .min(3,{message:"Confirm Password must be atleast 3 chracter"})
    .max(300,{message:"Confirm must be not more than 300 chracter"}),
});


const loginSchema = z.object({
    email:z
        .string({required_error:"Email is required"})
        .trim()
        .email({message:"Invalid email address"})
        .min(3,{message:"Email must be atleast 3 chracter"})
        .max(300,{message:"Email must be not more than 300 chracter"}),
    password:z
        .string({required_error:"Password is required"})
        .trim()
        .min(3,{message:"Password must be atleast 3 chracter"})
        .max(300,{message:"Password must be not more than 300 chracter"}),
    });

export default {signupSchema,loginSchema};