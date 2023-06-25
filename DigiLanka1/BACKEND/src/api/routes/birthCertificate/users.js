import express from 'express';
let User = require("../../model/birthCertificate/user");

const router = express.Router();

router.route("/add").post((req,res)=>{

    const fullName = req.body.fullName;
    const birthDate = req.body.birthDate;
    const birthPlace = req.body.birthPlace;
    const fatherName = req.body.fatherName;
    const fatherBirthDate = req.body.fatherBirthDate;
    const fatherBirthPlace = req.body.fatherBirthPlace;
    const fatherNationality = req.body.fatherNationality;
    const motherName = req.body.motherName;
    const motherBirthDate = req.body.motherBirthDate;
    const motherBirthPlace = req.body.motherBirthPlace;
    const motherNationality = req.body.motherNationality;
    const married = req.body.married;
    const grandFatherName = req.body.grandFatherName;
    const grandFatherBirthDate = req.body.grandFatherBirthDate;
    const grandFatherbirthPlace = req.body.grandFatherbirthPlace;
    const bcRegDate = req.body.bcRegDate;


    const newUser = new User({

        fullName,
        birthDate,
        birthPlace,
        fatherName,
        fatherBirthDate,
        fatherBirthPlace,
        fatherNationality,
        motherName,
        motherBirthDate,
        motherBirthPlace,
        motherNationality,
        married,
        grandFatherName,
        grandFatherBirthDate,
        grandFatherbirthPlace,
        bcRegDate
    })

    newUser.save().then(()=>{
        res.json("User Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {fullName, birthDate, birthPlace, fatherName, fatherBirthDate, fatherBirthPlace, fatherNationality, motherName, motherBirthDate, motherBirthPlace, motherNationality, married, grandFatherName, grandFatherBirthDate, grandFatherbirthPlace, bcRegDate} = req.body;

    const updateUser = {
        fullName,
        birthDate,
        birthPlace,
        fatherName,
        fatherBirthDate,
        fatherBirthPlace,
        fatherNationality, 
        motherName, 
        motherBirthDate, 
        motherBirthPlace, 
        motherNationality, 
        married, 
        grandFatherName, 
        grandFatherBirthDate, 
        grandFatherbirthPlace, 
        bcRegDate
    }

    const update = await User.findByIdAndUpdate(userId, updateUser)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating user data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;
    console.log('rizuu');
    await User.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
    
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;

    const user = await User.findById(userId)
    .then((user) => {
        res.status(200).send({status: "User fetched", user});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
    
})

module.exports = router;