import mongoose, {connection} from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({

    fullName : {
        type : String,
        required: true
    },
    birthDate : {
        type : String,
        required: true
    },
    birthPlace : {
        type : String,
        required: true
    },
    fatherName : {
        type : String,
        required: true
    },
    fatherBirthDate : {
        type : String,
        required: true
    },
    fatherBirthPlace : {
        type : String,
        required: true
    },
    fatherNationality : {
        type : String,
        required: true
    },
    motherName : {
        type : String,
        required: true
    },
    motherBirthDate : {
        type : String,
        required: true
    },
    motherBirthPlace : {
        type : String,
        required: true
    },
    motherNationality : {
        type : String,
        required: true
    },
    married : {
        type : String,
        required: true
    },
    grandFatherName : {
        type : String,
        required: true
    },
    grandFatherBirthDate : {
        type : String,
        required: true
    },
    grandFatherbirthPlace : {
        type : String,
        required: true
    },
    bcRegDate : {
        type : String,
        required: true
    },
})

const User = mongoose.model("RegisteredUser",userSchema);

module.exports = User;