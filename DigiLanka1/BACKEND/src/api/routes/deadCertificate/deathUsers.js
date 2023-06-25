import express from 'express';
let IssuedDeathCertificate = require("../../model/deadCertificate/deathUser");

const router = express.Router();

router.route("/add").post((req,res)=>{

    const fullName = req.body.fullName;
    const placeOfDeath = req.body.placeOfDeath;
    const deathDate = req.body.deathDate;
    const fatherName = req.body.fatherName;
    const motherName = req.body.motherName;
    const reasonForDeath = req.body.reasonForDeath;
    const deathCategory = req.body.deathCategory;

    const newIssuedDeathCertificate = new IssuedDeathCertificate({

        fullName,
        placeOfDeath,
        deathDate,
        fatherName,
        motherName,
        reasonForDeath,
        deathCategory
    })

    newIssuedDeathCertificate.save().then(()=>{
        res.json("User Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    IssuedDeathCertificate.find().then((deathUsers)=>{
        res.json(deathUsers)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {fullName, placeOfDeath, deathDate, fatherName, motherName, reasonForDeath, deathCategory} = req.body;

    const updateUser = {
        fullName,
        placeOfDeath,
        deathDate,
        fatherName,
        motherName,
        reasonForDeath,
        deathCategory
    }

    const update = await IssuedDeathCertificate.findByIdAndUpdate(userId, updateUser)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating user data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await IssuedDeathCertificate.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
    
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;

    const user = await IssuedDeathCertificate.findById(userId)
    .then((user) => {
        res.status(200).send({status: "User fetched", user});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
    
})

module.exports = router;