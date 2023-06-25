import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger";

import {connect} from "./utils/database.connection";
// Bc and Dc 
import userRouter from "./api/routes/birthCertificate/users";
import deathUserRouter from "./api/routes/deadCertificate/deathUsers";

// Nic
const nic = require('./api/routes/nic/addPeople');

// driver
const driver = require('./api/routes/driver/driver')

// passport
import passport from "./api/routes/passport/passports";

// medical
import medical from "./api/routes/medical/deathUsers";

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res, next) => {
    res.send("<h2> DigiLanka</h2>");
    next();
})

app.listen(PORT, () => {
    logger.info("Digilanka testing1");
    logger.info('Server is up and running successfully');
    connect();
})



// Bc and Dc
app.use("/user",userRouter);
app.use("/deathUser",deathUserRouter);

// Nic
app.use('/nic', nic);

// Passport
app.use("/passport", passport);

// Medical
app.use("/medical", medical);

// Driver
 //routes
 app.use('/api/driver' , driver);
 //error url middleware
 app.use('*', (req,res,next)=>{
   res.status(404).json({message:'page not found'})
 })
