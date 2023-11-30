// Category Controller
import Category from '../models/Category';

export const allCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ categories });
    // Retrieve user data from the database and send it back to the client
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const categoryById = async (req, res) => {
  try {
    console.log(req); 
    if (req.params.categoryId) {
      const categoryItem = await Category.findOne({ _id: req.params.categoryId });
      return res.json({ categoryItem }); // Use return here to send the response and exit the function
    }
    return res.status(400).json({ message: 'Invalid request' }); // Use return here as well
    // Retrieve user data from the database and send it back to the client
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' }); // Use return here as well
  }
};
