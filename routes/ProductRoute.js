const express= require('express')
const add_productControll= require('../controlers/admin/AddProduct')
const get_productControll=require('../controlers/admin/getProducts')
const updateProduct = require('../controlers/admin/putProduct')
const deleteProduct = require('../controlers/admin/delete')
const router = express.Router();
router.route("/").post(add_productControll.addProduct);
router.route("/").get(get_productControll.getProducts)
router.route("/").put(updateProduct.updateProduct)
router.route("/").delete(deleteProduct.deleteProduct)
module.exports = router;