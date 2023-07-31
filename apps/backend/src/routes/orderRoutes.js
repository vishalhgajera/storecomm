import express from 'express';
import { getAllOrdersByCustomerId, updateOrDeleteOrder } from '../controllers/orderController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

// Get all orders for a specific customer (customerId)
router.get('/all', getAllOrdersByCustomerId);

// Update or delete an order for a specific customer (customerId) and product (productId)
router.put('/:productID', updateOrDeleteOrder);

export default router;
