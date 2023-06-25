import express from "express";
let passport = require("../../model/passport/passport");

const router = express.Router();

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const Dob = req.body.Dob;
  const residence = req.body.residence;
  const gender = req.body.gender;
  const height = req.body.height;
  const blood_group = req.body.blood_group;
  const colourohair = req.body.colourohair;
  const colouroeye = req.body.colouroeye;
  const zip = req.body.zip;
  const Phone = req.body.Phone;
  const Email = req.body.Email;
  const Address = req.body.Address;
  const city = req.body.city;
  const img = req.body.img;

  console.log(name);

  const newPassport= new passport({
    name,
    Phone,
    Email,
    Address,
    age,
    Dob,
    residence,
    gender,
    height,
    blood_group,
    colourohair,
    colouroeye,
    zip,
    city,
    img,
  });

  console.log(newPassport);

  newPassport
    .save()
    .then(() => {
      res.json("User Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  passport.find()
    .then((deathUsers) => {
      res.json(deathUsers);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const {
    name,
    Phone,
    Email,
    Address,
    age,
    Dob,
    residence,
    gender,
    height,
    blood_group,
    colourohair,
    colouroeye,
    zip,
    city,
    img,
  } = req.body;

  const updateUser = {
    name,
    Phone,
    Email,
    Address,
    age,
    Dob,
    residence,
    gender,
    height,
    blood_group,
    colourohair,
    colouroeye,
    zip,
    city,
    img,
  };

  const update = await passport.findByIdAndUpdate(
    userId,
    updateUser
  )
    .then(() => {
      res.status(200).send({ status: "User updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating user data", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await passport.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  const user = await passport.findById(userId)
    .then((user) => {
      res.status(200).send({ status: "User fetched", user });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
