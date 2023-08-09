import mongoose from 'mongoose';

// Define the product sub-schema
const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: false
  },
  quantity: {
    type: Number,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: false
  },
  discount: {
    type: Number,
    default: 0
  }
});

// Define the order schema
const orderSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "pending"
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  userAddress: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  paymentType: {
    type: String,
    required: true
  },
  products: [productSchema]
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
