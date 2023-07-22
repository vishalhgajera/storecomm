// controllers/authController.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';

export const signup = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, 'your_secret_key'); // Replace 'your_secret_key' with a strong secret

    // Return the token
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'your_secret_key'); // Replace 'your_secret_key' with the same secret used during signup

    // Return the token
    res.json({ token, user:{email:user.username} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getUserData = async (req, res) => {

  console.log(req.user);
  // Middleware should verify the token and attach user data to the request (req.user)
  // You can use libraries like 'jsonwebtoken' and middleware to achieve this
  const userId = req?.user?.userId;

  try {
    // Retrieve user data from the database and send it back to the client
    const user = await User.findById(userId).select('-password');
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
