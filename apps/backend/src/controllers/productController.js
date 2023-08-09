import Product from '../models/Product';

export const allProducts = async (req, res) => {
  try {
    if (req.query.offset && req.query.record) {

      const product = await Product.find()
        .skip(req.query.offset)
        .limit(req.query.record);

        return res.json({ product });

    } else {

      const product = await Product.find();
      return res.json({ product });

    }
    // Retrieve user data from the database and send it back to the client
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const productById = async (req, res) => {
  try {
    console.log(req); 
    if (req.params.productId) {
      const product = await Product.findOne({ _id: req.params.productId });
      return res.json({ product }); // Use return here to send the response and exit the function
    }
    return res.status(400).json({ message: 'Invalid request' }); // Use return here as well
    // Retrieve user data from the database and send it back to the client
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' }); // Use return here as well
  }
};
