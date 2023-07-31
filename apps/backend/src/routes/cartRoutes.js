// routes/cartRoutes.js
import express from 'express';
import { cartList , updateOrDeleteCartItem } from '../controllers/cartController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

// Cart Data route with full product details using product id
router.get('/all', cartList);
router.post('/:productId/:qty', updateOrDeleteCartItem);


export default router;