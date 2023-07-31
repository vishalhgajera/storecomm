import User from '../models/User';

export const cartList = async (req, res) => {
  try {
    const  userId  = req.userId;
    const user = await User.findById(userId).populate('cart.product');
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addToCart = async (req, res) => {
    try {
      const  userId  = req.userId;
      const { productId, qty } = req.query;
  
      // Validate the incoming data
      if (!productId || !qty) {
        return res.status(400).json({ message: 'productId and qty are required in the request query.' });
      }
  
      const existingProduct = await User.findOne({
        _id: userId,
        'cart.product': productId,
      });
  
      if (existingProduct) {
        // If the product exists, increment the quantity
        await User.updateOne(
          { _id: userId, 'cart.product': productId },
          { $inc: { 'cart.$.qty': qty } }
        );
      } else {
        // If the product doesn't exist, add it to the cart
        await User.updateOne(
          { _id: userId },
          { $addToSet: { cart: { productId, qty: qty } } }
        );
      }
  
      // Fetch the updated cart and send the response
      const updatedUser = await User.findById(userId).populate('cart.product');
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ cart: updatedUser.cart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  export const updateOrDeleteCartItem = async (req, res) => {
    try {
      const  userId  = req.userId;
      const { productId, qty } = req.params;
  
      // Validate the incoming data
      if (!productId || !qty) {
        return res.status(400).json({ message: 'productId and qty are required in the request query.' });
      }
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Find the index of the cart item by productId in the user's cart
      const cartItemIndex = user.cart.findIndex((item) => item.product.toString() === productId);
  
      if (cartItemIndex !== -1) {
        // If the product exists, update the quantity or delete if qty is 0
        if (qty > 0) {
          user.cart[cartItemIndex].qty = qty;
        } else {
          user.cart.splice(cartItemIndex, 1);
        }
        await user.save();
  
        return res.status(200).json({ message: 'Cart item updated successfully', cart: user.cart });
      } else {
        // If the product doesn't exist and qty is greater than 0, add it to the cart
        if (qty > 0) {
          user.cart.push({ product:productId, qty });
          await user.save();
          return res.status(200).json({ message: 'Cart item added successfully', cart: user.cart });
        } else {
          return res.status(400).json({ message: 'Invalid quantity. Quantity must be greater than 0 to add to cart.' });
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };