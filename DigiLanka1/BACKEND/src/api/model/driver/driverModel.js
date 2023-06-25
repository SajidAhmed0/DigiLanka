const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: {
    type : String,
    required : [true, "Please enter driver name"],
    trim: true,
    maxLength : [100,"driver name cannot exceed 100 characters"]
  },
  address: {
    type:String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  blood: {
    type: String,
    required: [true, "please enter blood type"],
    enum: {
      values:[
        'O+',
        'AB-',
        'AB+',
        'A+',
        'A-',
        'B+',
        'B-'
      ],
      message: "please enter valid blood type"
    }

  },
  category: [{
    type: String,
    required: [true, "Please enter vehicle category"],
    enum: {
      values:[
        'Car',
        'Bus',
        'Motor cycle',
        'Auto'
      ],
      message: "Please enter valid category"
    }
  }],
  issue:{
    type: String,
    required: true
  },
  expire:{
    type:String,
    required: true
  },
  status:{
    type:String,
    required:[true, "please enter the driver status"],
    enum: {
      values:[
        'approved',
        'canceled',
        'suspended'
      ],
      message:"please select proper status"
    }
  }
}, {timeStamp: true});

let schema = mongoose.model('driver', driverSchema);

module.exports = schema;