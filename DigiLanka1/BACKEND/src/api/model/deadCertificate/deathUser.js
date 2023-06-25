import mongoose, {connection} from "mongoose";

const Schema = mongoose.Schema;

const deathSchema = new Schema({

    fullName : {
        type : String,
        required: true
    },
    placeOfDeath : {
        type : String,
        required: true
    },
    deathDate : {
        type : String,
        required: true
    },
    fatherName : {
        type : String,
        required: true
    },
    
    motherName : {
        type : String,
        required: true
    },
    
    reasonForDeath : {
        type : String,
        required: true
    },
    deathCategory : {
        type : String,
        required: true
    },
})

const IssuedDeathCertificate = mongoose.model("IssuedDeathCertificate",deathSchema);

module.exports = IssuedDeathCertificate;