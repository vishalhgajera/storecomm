// routes/authRoutes.js
import express from 'express';
import { signup, login , getUserData } from '../controllers/authController';

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// User Data route
router.get('/userdata', getUserData);

export default router;

