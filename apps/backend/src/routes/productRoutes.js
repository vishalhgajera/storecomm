// routes/authRoutes.js
import express from 'express';
import { allProducts, productById } from '../controllers/productController';

const router = express.Router();
// Product Data route

router.get('/all', allProducts);

router.get('/:productId', productById);

export default router;