import Order from '../models/Order';

// Get all orders for a specific customer (customerId)
export const getAllOrders = async (req, res) => {
  try {
    const customerId  = req.userId;
    const orders = await Order.find({ customerId });

    console.log(orders);

    if (!orders) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Get Single order using (orderId)
export const getOrderbyId = async (req, res) => {
  try {
  const customerId  = req.userId;
   const orderId  = req.params.orderId;
   if (!orderId || !customerId) {
     return res.status(404).json({ message: 'OrderId not found' });
    }
    const order = await Order.findOne({ _id: orderId, customerId });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    return res.status(200).json({order});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const createNewOrder = async (req, res) => {
  try {
    const customerId  = req.userId;
    const orderData = req.body;
    orderData.customerId = customerId;
    const newOrder = new Order(orderData);

    const savedOrder = await newOrder.save();
    return res.status(201).json(savedOrder);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export const updateOrder = async (req, res) => {
  try {
    const { customerName,contactNumber, status, userAddress, paymentType} = req.body;

    // Find the order by orderNumber and userId
    const order = await Order.findOne({ _id: req.params.orderId, customerId: req.userId });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Update the order details
    order.customerName = customerName || order.customerName;
    order.userAddress = userAddress || order.userAddress;
    order.paymentType = paymentType || order.paymentType;
    order.status = status || order.status;
    order.contactNumber = contactNumber || order.contactNumber;
    

    // Save the updated order
    const updatedOrder = await order.save();
    return res.status(200).json(updatedOrder);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export const deleteOrder = async (req, res) => {
  try {

    const deletedOrder = await Order.findOneAndDelete({ _id: req.params.orderId, customerId: req.userId });
    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.status(200).json(deletedOrder._id );
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}


export const updateOrderItems = async (req, res) => {
  try {
    console.log(req.body);
    const customerId  = req.userId;
    const {orderId,productID} = req.params;
    const {quantity,discount} = req.body;

    // Validate the incoming data
    if (!orderId || !productID || !customerId) {
      return res.status(400).json({ message: 'order data required in the request body.' });
    }

    if(quantity >= 0 || discount >= 0){
      // Find the order with the specified orderId and that contains the specified productID in the products array
      let  order = await Order.findOne({ _id: orderId, 'products.productID':productID});
      if(order ){
        const productIndex = order.products.findIndex((item) => item.productID.toString() === productID);
        // Find the index of the product by productID in the order's products array
    
        if (productIndex !== -1) { 
          // If the product exists, update the quantity, and discount
          if (quantity>0) {
            order.products[productIndex].quantity = quantity;
            order.products[productIndex].discount = discount || 0;
          } else {
            // If the quantity is 0 or less, remove the product from the order
            order.products.splice(productIndex, 1);
          }
        } 
      }
      await order.save();
      return res.status(200).json({ message: 'Order updated successfully', order });
    }
    return res.status(400).json({ message: 'order data required in the request body' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
