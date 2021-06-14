const express= require('express')
const router = express.Router();
const Payment = require('../controlers/payment/pay')
router.route("/").post(Payment.pay);
module.exports = router;