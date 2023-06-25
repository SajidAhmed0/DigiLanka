import mongoose, {connection} from "mongoose";

const schema = mongoose.Schema;

const nicSchema = new schema({
    name : {
        type : String,
        required : true
    },
    otherName : {
        type : String
    },
    birthDate : {
        type : String,
        required : true
    },
    birthPlace : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    nic : {
        type : String,
        required : true
    },
    publishedDate : {
        type : String,
        required : true
    },
    image : {
        data : Buffer,
        contentType : String
    }
})

const people = mongoose.model("peopleNic", nicSchema);

module.exports = people;