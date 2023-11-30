// models/Category.js
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
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
  });
  
  // Create the Category model
  const Category = mongoose.model('Category', categorySchema);

  export default  Category;