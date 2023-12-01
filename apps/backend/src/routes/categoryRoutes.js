// routes/authRoutes.js
import express from 'express';
import { allCategories, categoryById } from '../controllers/categoryController';

const router = express.Router();
// Category Data route

router.get('/all', allCategories);

router.get('/:categoryId', categoryById);

export default router;