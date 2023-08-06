import express from 'express';
import { getAllOrders, createNewOrder ,  getOrderbyId , updateOrder, deleteOrder} from '../controllers/orderController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

// Get all orders for a specific customer (customerId)
router.get('/all', getAllOrders);
// Get single order (orderID)
router.get('/:orderID', getOrderbyId);
// Create new order
router.post('/', createNewOrder);
// Update order using orderId
router.put('/:orderID', updateOrder);
// delete order using orderId
router.delete('/:orderID', deleteOrder);

export default router;
