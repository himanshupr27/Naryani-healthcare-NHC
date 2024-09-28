import {z} from "zod";

const ContactSchema =z.object({
fullname:z
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
    .min(10,{message:"Phone No. must be atleast 10 chracter"})
    .max(12,{message:"Phone No. must be not more than 12 chracter"}),
message:z
    .string({required_error:"Message is required"})
    .trim()
    .min(3,{message:"Message must be atleast 3 chracter"})
    .max(500,{message:"Message must be not more than 500 chracter"}),
});

export default ContactSchema;