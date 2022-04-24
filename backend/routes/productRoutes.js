const express=require('express');
const router=express.Router();
const {registerProduct, getProduct,getProductOne, deleteProduct,updateProduct}=require('../controllers/productController')


router.route('/product').post(registerProduct).get(getProduct);

router.route('/product/:id').get(getProductOne).delete(deleteProduct).patch(updateProduct)



module.exports=router;