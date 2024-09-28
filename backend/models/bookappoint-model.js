import {Schema, model} from "mongoose";

const bookSchema= new Schema({
    paitentname:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    time:{
        type: String,
        require: true,
    },
    date:{
        type: String,
        require: true,
    },
    phoneno:{
        type: String,
        require: true,
    },
    doctor:{
        type: String,
        require: true,
    },
    department:{
        type: String,
        require: true,
    },
    symptoms:{
        type: String,
        require: true,
    },

});

const appointment = new model("appointment",bookSchema);
export default appointment;