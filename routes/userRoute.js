const express= require('express')
const userControll= require('../controlers/user')
const router = express.Router();

router.route("/").post(userControll.signUp);
router.route("/:id").get(userControll.signIn);

module.exports = router ;