import express from 'express';
import mongoose from 'mongoose';

const people =  require('../../model/nic/people');
const fs = require('fs');
const User = require('../../model/birthCertificate/user');

const router = express.Router();

const multer = require('multer');
// const ImageModel = require('./image.model');

//storage
const Storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage : Storage
});

router.route("/add").post(upload.single('testImage'),async (req,res)=>{
            const name = req.body.name;
            const otherName = req.body.otherName;
            const birthDate = req.body.birthDate;
            const birthPlace = req.body.birthPlace;
            const gender = req.body.gender;
            const address = req.body.address;
            const nic = req.body.nic;
            const publishedDate = req.body.publishedDate;
            const image = {
                data : fs.readFileSync('uploads/' + req.file.filename),
                contentType : 'image/png'
            }

            const newPeople = new people({

                name,
                otherName,
                birthDate,
                birthPlace,
                gender,
                address,
                nic,
                publishedDate,
                image
            });

            // newPeople.save()
            // .then(()=> res.json({newPeople}))
            // .catch((err) => console.log(err));

            try{
                people.create(newPeople);
                res.json({newPeople});
            }catch(e){
                res.json({msg:e});
            }
        
    

    
})

// router.route("/add").post(async (req,res)=>{

//     const name = req.body.name;
//     const otherName = req.body.otherName;
//     const birthDate = req.body.birthDate;
//     const birthPlace = req.body.birthPlace;
//     const gender = req.body.gender;
//     const address = req.body.address;

//     const newPeople = new people({

//         name,
//         otherName,
//         birthDate,
//         birthPlace,
//         gender,
//         address
//     });

//     try{
//         await people.create(newPeople);
//         res.json({newPeople});
//     }catch(e){
//         res.json({msg:e});
//     }

// })

router.route("/").get((req,res)=>{

    people.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/getBc/:id").get(async (req,res) => {
    let userId = req.params.id;

    const user = await User.findById(userId)
    .then((user) => {
        res.status(200).send({user});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
    
})

router.route("/nic/:id").get(async (req,res) => {
    let peopleId = req.params.id;
    
    const user = await people.find({nic : peopleId})
    .then((user) => {
        res.status(200).send([user]);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
    
})

router.route("/search").get((req,res)=>{
    let match = {};
    if(req.query.place){
        match.birthPlace = new RegExp(req.query.place, 'i');
    }
    if(req.query.year){
        match.birthDate = new RegExp(req.query.year, 'i');
    }
    if(req.query.g){
        match.gender = new RegExp(req.query.g, 'i');
    }
     people.aggregate([{$match : match}])
    .then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(upload.single('testImage'),async (req, res) => {
    let peopleId = req.params.id;
    const {name, otherName, birthDate, birthPlace, publishedDate, gender, nic, address} = req.body;
    // const image = {
    //     data : fs.readFileSync('uploads/' + req.file.filename),
    //     contentType : 'image/png'
    // }
    var image;
    if(req.file != null){
     image = {
        data : fs.readFileSync('uploads/' + req.file.filename),
        contentType : 'image/png'
    }
}
    const updatePeople = {
        name,
        otherName,
        birthDate,
        birthPlace,
        gender,
        address,
        nic,
        publishedDate,
        image
    }

    const update = await people.findByIdAndUpdate(peopleId, updatePeople)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating user data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let peopleId = req.params.id;

    await people.findByIdAndDelete(peopleId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
    
})



router.route("/:id").get(async (req,res) => {
    let peopleId = req.params.id;
    
    const user = await people.findById(peopleId)
    .then((user) => {
        res.status(200).send([user]);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
    
})



module.exports = router;

