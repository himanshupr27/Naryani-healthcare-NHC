import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import env from "dotenv";
env.config();
//Creating Schema
const userSchema = new mongoose.Schema({
    Username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phoneno:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    cnfpassword:{
        type: String,
        require: true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});
//hashing the password
userSchema.pre("save",async function(next){
const user=this;
if(!user.isModified("password")){
    next();
}
try {
    const saltround = 10;
    const hasedPassword = await bcrypt.hash(user.password,saltround);
    user.password=hasedPassword;
} catch (error) {
next(error);
}
})
//jwt
userSchema.methods.generateToken = async function (){
try {
    return jwt.sign({
        userId:this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    {expiresIn: "30d" })
} catch (error) {
    console.error(error)
}
}
//exporting the Schema, creating the collection
const User = new mongoose.model("Users",userSchema);
 export default User;