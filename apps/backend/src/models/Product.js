// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    creationAt: {
      type: Date,
      required: false,
    },
    updatedAt: {
      type: Date,
      required: false,
    },
    category: {
      id: {
        type: Number,
        required: false,
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
      creationAt: {
        type: Date,
        required: false,
      },
      updatedAt: {
        type: Date,
        required: false,
      },
    },
  });
  
  // Create the Product model
  const Product = mongoose.model('Product', productSchema);

  export default  Product;

