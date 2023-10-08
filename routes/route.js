import express from  'express';
import { userSignUp, userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';



const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.get('/payment', addPaymentGateway);
router.get('/callback', paymentResponse);

export default router;