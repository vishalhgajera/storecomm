// routes/addressRoutes.js
import express from 'express';
import { addressList , updateAddressList  , deleteAddress  } from '../controllers/addressController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/all', addressList);
router.post('/', updateAddressList);
router.delete('/:addressId/', deleteAddress);

export default router;