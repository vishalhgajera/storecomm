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

const app = express();
connectDB();
app.use(express.json());
app.use(bodyParser.json());

// const whitelist = ["http://localhost:4200"]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   credentials: true,
// }

app.use(cors());


// Routes
app.use('/auth', authRoutes);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
