import Order from '../models/Order';

// Get all orders for a specific customer (customerId)
export const getAllOrders = async (req, res) => {
  try {
    const customerId  = req.userId;
    const orders = await Order.find({ customerId }).populate('products.productID');

    console.log(orders);

    if (!orders) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get Single order using (orderId)
export const getOrderbyId = async (req, res) => {
//
};

export const createNewOrder = async (req, res) => {
  try {
    debugger
    const customerId  = req.userId;
    const orderData = req.body;
    orderData.customerId = customerId;
    const newOrder = new Order(orderData);

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export const updateOrder = async (req, res) => {
//
}

export const deleteOrder = async (req, res) => {
//
}


// export const updateOrDeleteOrder = async (req, res) => {
//   try {
//     const customerId  = req.userId;
//     const {orderId } = req.params;
//     const reqOrder = req.body;

//     // Validate the incoming data
//     if (!reqOrder) {
//       return res.status(400).json({ message: 'order data required in the request body.' });
//     }

//     // Find the order with the specified customerId and that contains the specified productID in the products array
//     let order = await Order.findOne({orderId});

//     if (!order) {
//       // If the order doesn't exist, create a new one
//       reqOrder.customerId = customerId,
//       reqOrder.products[0].productID = productID,
//       order = new Order(reqOrder);
//     } else {
//       order = await Order.findOne({ 'customerId': customerId, 'products.productID':productID});
//       if(order){
//         const productIndex = order.products.findIndex((item) => item.productID.toString() === productID);
//         // Find the index of the product by productID in the order's products array
//         const {quantity,unitPrice,discount} = reqOrder.products[productIndex];/////
//         if (productIndex !== -1) { 
//           // If the product exists, update the quantity, price, and discount
//           if (quantity > 0) {
//             order.products[productIndex].quantity = quantity;
//             order.products[productIndex].unitPrice = unitPrice;
//             order.products[productIndex].discount = discount || 0;
//           } else {
//             // If the quantity is 0 or less, remove the product from the order
//             order.products.splice(productIndex, 1);
//           }
//         } 
//       }
//       else {
//         // If the product doesn't exist and quantity is greater than 0, add it to the order
//         const {quantity,unitPrice,discount} = reqOrder.products[0];/////
//         if (quantity > 0) {
//           order.products.push({ productID, quantity, unitPrice, discount });
//         } else {
//           return res.status(400).json({ message: 'Invalid quantity. Quantity must be greater than 0 to add to the order.' });
//         }
//       }
//     }

//     await order.save();
//     res.status(200).json({ message: 'Order updated successfully', order });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };


// below code for get data of stored product details (join query orders and products)

// import Product from '../models/Product';

// export const getProductDetailsByProductId = async (req, res) => {
//   try {
//     const { userId, productId } = req.params;

//     // Find the order with the specified userId and that contains the specified productId in the products array
//     const order = await Order.findOne({ userId, 'products.productID': productId });

//     if (!order) {
//       return res.status(404).json({ message: 'No order found with the specified user ID and product ID' });
//     }

//     // Find the product details based on the productId from the products collection
//     const product = await Product.findById(productId);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     // Return the product details
//     res.status(200).json({ product });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
