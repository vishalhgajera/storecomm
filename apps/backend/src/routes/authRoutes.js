// routes/authRoutes.js
import express from 'express';
import { signup, login } from '../controllers/authController';

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

export default router;

