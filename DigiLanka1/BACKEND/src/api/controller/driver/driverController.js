const Driver = require('../../model/driver/driverModel');
const mongoose = require('mongoose');
const ApiFeatures = require('../../../utils/driver/apiFeatures');


//create a new driver license
exports.createDriver = async (req,res) => {

  let emptyField =[];

  if(!req.body.name) {
    emptyField.push('name');
  }
  if(!req.body.address) {
    emptyField.push('address');
  }
  if(!req.body.blood) {
    emptyField.push('blood');
  }
  // if(req.body.category.length == 0) {
  //   emptyField.push('category');
  // }
  if(!req.body.issue) {
    emptyField.push('issue');
  }
  if(!req.body.dob) {
    emptyField.push('expire');
  }
  if(!req.body.dob) {
    emptyField.push('status');
  }
  if(!req.body.dob) {
    emptyField.push('dob');
  }

  //console.log(emptyField);

  if(emptyField.length > 0) {
    return res.status(404).json({error: 'please fill the all field', emptyField})
  }

  try {
    const driver = await Driver.create(req.body);

    if(!driver) {
      return res.status(404).json({
        success: false,
        error: 'failed to create',
      });
    }
    res.status(200).json({
      success: true,
      message: 'successfully created',
      driver
    });
    
  } catch (error) {
    res.status(404).json({error:error.message});
    console.log(error);
  }
}


//get all driver license or with search by driver name
exports.getAllDrivers= async (req,res)=> {

  try {
    const apiFeatures = new ApiFeatures(Driver.find().sort({name:-1}), req.query).search()
    const driver = await apiFeatures.query;

    if(!driver) {
      return res.status(404).json({
        success: false,
        message: 'failed to get the files',
      });
    }
    res.status(200).json({
      success: true,
      count: driver.length,
      message: 'successfully got the files',
      driver
    });

  } catch (error) {
    res.status(404).json({error:error.message});
    console.log(error);
  }

}

//get a single driver license
exports.getSingleDriver = async (req,res)=>{

  
  try {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: 'No such driver license file',
      });
    }

    const driver = await Driver.findById(id);

    if(!driver) {
      return res.status(404).json({
        success: false,
        message: 'No such driver license file',
      });
    }
    res.status(200).json({
      success: true,
      message: 'successfully got a single file',
      driver
    });

  } catch (error) {
    res.status(404).json({error:error.message});
    console.log(error);
  }

}


//update a driver license
exports.updateDriver = async (req,res)=>{

  let emptyField =[];

  if(!req.body.name) {
    emptyField.push('name');
  }
  if(!req.body.address) {
    emptyField.push('address');
  }
  if(!req.body.blood) {
    emptyField.push('blood');
  }
  // if(req.body.category.length == 0) {
  //   emptyField.push('category');
  // }
  if(!req.body.issue) {
    emptyField.push('issue');
  }
  if(!req.body.dob) {
    emptyField.push('expire');
  }
  if(!req.body.dob) {
    emptyField.push('status');
  }
  if(!req.body.dob) {
    emptyField.push('dob');
  }

  //console.log(emptyField);

  if(emptyField.length > 0) {
    return res.status(404).json({error: 'please fill the all field', emptyField})
  }

  try {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: 'No such driver license file',
      });
    }
    const driver = await Driver.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true, runValidators:true});

    if(!driver) {
      return res.status(404).json({
        success: false,
        message: 'failed to update',
      });
    }
    res.status(200).json({
      success: true,
      message: 'successfully updated',
      driver
    });
    
  } catch (error) {
    res.status(404).json({error:error.message});
    console.log(error);
  }
}

//delete a driver license
exports.deleteDriver = async (req,res)=>{

  const {id} = req.params;
  try {
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: 'No such driver license file',
      });
    }
    
    const driver = await Driver.findByIdAndDelete(id);

    if(!driver) {
      return res.status(404).json({
        success: false,
        message: 'failed to delete',
      });
    }
    res.status(200).json({
      success: true,
      message: 'successfully deleted',
      driver
    });
    
  } catch (error) {
    res.status(404).json({error:error.message});
    console.log(error);
  }
}
