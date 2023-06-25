import mongoose, { connection } from "mongoose";

const Schema = mongoose.Schema;

const passportSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  Dob: {
    type: String,
    required: true,
  },
  residence: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  height: {
    type: String,
    required: true,
  },

  blood_group: {
    type: String,
    required: true,
  },

  colourohair: {
    type: String,
    required: true,
  },

  colouroeye: {
    type: String,
    required: true,
  },

  zip: {
    type: String,
    required: true,
  },

  Phone: {
    type: String,
    required: true,
  },

  Email: {
    type: String,
    required: true,
  },

  Address: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },
});

const passport = mongoose.model("passportuser", passportSchema);

module.exports = passport;
