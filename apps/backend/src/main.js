/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import userCartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3333;

const app = express();
connectDB();
app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/product', productRoutes);
app.use('/cart', userCartRoutes);
app.use('/order', orderRoutes);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
