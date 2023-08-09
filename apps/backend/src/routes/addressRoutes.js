// routes/addressRoutes.js
import express from 'express';
import { addressList , addNewAddress , updateAddress , deleteAddress  } from '../controllers/addressController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/all', addressList);
router.post('/', addNewAddress);
router.put('/:addressId/', updateAddress);
router.delete('/:addressId/', deleteAddress);

export default router;