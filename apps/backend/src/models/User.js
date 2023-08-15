// models/User.js
import mongoose from 'mongoose';

// Define the product sub-schema
const addressSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  contactNo:{
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  cart: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
    },
  ],
  address: [addressSchema],
});

const User = mongoose.model('User', userSchema);

export default User;

