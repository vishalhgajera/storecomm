import express from 'express';
import { getAllOrders, createNewOrder ,  getOrderbyId , updateOrder, deleteOrder, updateOrderItems} from '../controllers/orderController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

// Get all orders for a specific customer (customerId)
router.get('/all', getAllOrders);
// Get single order (orderID)
router.get('/:orderId', getOrderbyId);
// Create new order
router.post('/', createNewOrder);
// Update order using orderId
router.put('/:orderId', updateOrder);
// delete order using orderId
router.delete('/:orderId', deleteOrder);

// Update and delete order items using orderId and productId
router.put('/:orderId/:productID', updateOrderItems);

export default router;
