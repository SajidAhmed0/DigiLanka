import mongoose, { connection } from "mongoose";

const Schema = mongoose.Schema;

const deathSchema = new Schema({
  DOX: {
    type: String,
    required: true,
  },
  DOI: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  passport: {
    type: String,
    required: true,
  },

  age: {
    type: String,
    required: true,
  },

  occupation: {
    type: String,
    required: true,
  },

  sex: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  Height: {
    type: String,
    required: true,
  },

  weight: {
    type: String,
    required: true,
  },

  blood_g: {
    type: String,
    required: true,
  },

  remarks: {
    type: String,
    required: true,
  },

  raight_v: {
    type: String,
    required: true,
  },
  left_v: {
    type: String,
    required: true,
  },

  squint: {
    type: String,
    required: true,
  },

  Hearing: {
    type: String,
    required: true,
  },

  pulse: {
    type: String,
    required: true,
  },

  pulse_s: {
    type: String,
    required: true,
  },

  blood_p: {
    type: String,
    required: true,
  },

  heart_m: {
    type: String,
    required: true,
  },

  Present: {
    type: String,
    required: true,
  },

  cns: {
    type: String,
    required: true,
  },

  ps: {
    type: String,
    required: true,
  },

  
});

const IssuedDeathCertificate = mongoose.model("medicaluser", deathSchema);

module.exports = IssuedDeathCertificate;
