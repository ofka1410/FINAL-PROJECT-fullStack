const express= require('express')
const router = express.Router();
const getCart = require('../controlers/cart/get_userCart')
const cart= require('../controlers/cart/Add_to_cart')
const delete_item= require('../controlers/cart/Delete_Item')
router.route("/:data").get(getCart.getCart)
router.route("/").post(cart.cartAdding)
router.route("/").delete(delete_item.deleteItem )
module.exports = router;