const express = require("express");
const {getSignup,postSignup,getLogin,postLogin,logout} =require('../controllers/userController');
// const {requireAuth}=require('../middlewares/authMiddlewares')

const router = express.Router();

router.route('/signup')
.get(getSignup)
.post(postSignup);

router.route('/login')
.get(getLogin)
.post(postLogin);

router.route('/logout')
.get(logout);



module.exports = router;
