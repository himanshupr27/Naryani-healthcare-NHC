import {z} from "zod";

const bookappointSchema = z.object({
    ptname:z
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
    time:z
    .string({required_error:"Time is required"})
    .trim()
    .min(3,{message:"Time must be atleast 10 chracter"})
    .max(12,{message:"Time must be not more than 12 chracter"}),
    date:z
    .string({required_error:"Date is required"})
    .trim()
    .min(3,{message:"Date must be atleast 10 chracter"})
    .max(20,{message:"Date must be not more than 12 chracter"}),
    phoneno:z
    .string({required_error:"Phone No. is required"})
    .trim()
    .min(10,{message:"Phone No. must be atleast 10 chracter"})
    .max(12,{message:"Phone No. must be not more than 12 chracter"}),
    doctor:z
    .string({required_error:"Doctor is required"})
    .trim()
    .min(3,{message:"Doctor must be atleast 10 chracter"})
    .max(12,{message:"Doctor must be not more than 12 chracter"}),
    department:z
    .string({required_error:"Department is required"})
    .trim()
    .min(3,{message:"Department must be atleast 3 chracter"})
    .max(12,{message:"Department must be not more than 12 chracter"}),
    symptoms:z
    .string({required_error:"Symptoms is required"})
    .trim()
    .min(3,{message:"Symptoms must be atleast 3 chracter"})
    .max(500,{message:"Symptoms must be not more than 500 chracter"}),
});

export default bookappointSchema;