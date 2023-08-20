import mongoose from 'mongoose';

// Define the product sub-schema
const productSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

// Define the order schema
const orderSchema = new mongoose.Schema({

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending"
  },
  userAddress: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  paymentType: {
    type: String,
    required: true,
  },
  totalAmount:{
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  orderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  products: [productSchema]
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
