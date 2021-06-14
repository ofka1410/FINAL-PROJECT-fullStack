const express= require('express')
const deliveries= require('../controlers/reservaition')
const router = express.Router();
router.route("/").get(deliveries.reservaition);

module.exports = router ;