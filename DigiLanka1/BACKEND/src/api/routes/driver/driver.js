const express = require('express');
const { createDriver, getAllDrivers, getSingleDriver, updateDriver, deleteDriver } = require('../../controller/driver/driverController');


const router = express.Router();

router.route('/get').get(getAllDrivers);
router.route('/new').post(createDriver);
router.route('/get/:id').get(getSingleDriver);
router.route('/get/:id').put(updateDriver);
router.route('/get/:id').delete(deleteDriver);


module.exports = router;