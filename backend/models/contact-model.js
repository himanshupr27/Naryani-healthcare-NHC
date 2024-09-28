import {Schema, model} from "mongoose";

const contactSchema = new Schema({
    fullname:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    message:{
        type: String,
        require: true,
    },
    phoneno:{
        type: String,
        require: true,
    },
});

const contact = new model("Contact",contactSchema);
 export default contact;