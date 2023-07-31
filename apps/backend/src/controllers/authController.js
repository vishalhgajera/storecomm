// controllers/authController.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';

const SECRET_KEY = process.env.SECRET_KEY || "i_cant_share_key";

export const signup = async (req, res) => {
  try {
    const { name,email,password,role } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = new User({ name,email, password: hashedPassword ,role});
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, SECRET_KEY ); // Replace 'your_secret_key' with a strong secret

    // Return the token
    res.json({ token, user:{name:newUser.name} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, SECRET_KEY ); // Replace 'your_secret_key' with the same secret used during signup

    // Return the token
    res.json({ token, user:{name:user.name} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
