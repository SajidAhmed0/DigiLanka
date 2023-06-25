import express from "express";
let IssuedDeathCertificate = require("../../model/medical/deathUser");

const router = express.Router();

router.route("/add").post((req, res) => {
  const DOX = req.body.DOX;
  const DOI = req.body.DOI;
  const name = req.body.name;
  const nic = req.body.nic;
  const passport = req.body.passport;
  const age = req.body.age;
  const occupation = req.body.occupation;
  const sex = req.body.sex;
  const phone = req.body.phone;
  const address = req.body.address;
  const Height = req.body.Height;
  const weight = req.body.weight;
  const blood_g = req.body.blood_g;
  const remarks = req.body.remarks;
  const raight_v = req.body.raight_v;
  const left_v = req.body.left_v;
  const squint = req.body.squint;
  const Hearing = req.body.Hearing;
  const pulse = req.body.pulse;
  const pulse_s = req.body.pulse_s;
  const blood_p = req.body.blood_p;
  const heart_m = req.body.heart_m;
  const Present = req.body.Present;
  const cns = req.body.cns;
  const ps = req.body.ps;
  

  console.log(name);

  const newIssuedDeathCertificate = new IssuedDeathCertificate({
     name, DOX, DOI, nic, passport, age, occupation, sex, phone, address, Height, weight, blood_g, remarks, raight_v, left_v, squint, 
    Hearing, pulse, pulse_s, blood_p, heart_m, Present, cns, ps,
  });

  console.log(newIssuedDeathCertificate);

  newIssuedDeathCertificate
    .save()
    .then(() => {
      res.json("User Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  IssuedDeathCertificate.find()
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
    id, name, DOX, DOI, nic, passport, age, occupation, sex, phone, address, Height, weight, blood_g, remarks, raight_v, left_v, squint, 
    Hearing, pulse, pulse_s, blood_p, heart_m, Present, cns, ps,
  } = req.body;

  const updateUser = {
    id, name, DOX, DOI, nic, passport, age, occupation, sex, phone, address, Height, weight, blood_g, remarks, raight_v, left_v, squint, 
      Hearing, pulse, pulse_s, blood_p, heart_m, Present, cns, ps,
  };

  const update = await IssuedDeathCertificate.findByIdAndUpdate(
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

  await IssuedDeathCertificate.findByIdAndDelete(userId)
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

  const user = await IssuedDeathCertificate.findById(userId)
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
