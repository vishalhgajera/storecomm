import User from '../models/User';

export const addressList = async (req, res) => {
  try {
    const  userId  = req.userId;
    const user = await User.findById(userId)

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ address: user.address });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
// export const addNewAddress = async (req, res) => {
//     try {
//       const  userId  = req.userId;
//       const addressDetail = req.body;
  
//       const user = await User.findById(userId);
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//       // Validate the incoming data
//       if (!addressDetail) {
//         return res.status(400).json({ message: ' addressDetail is required in the request query.' });
//       }else{
//         user.address.push(addressDetail);
//         await user.save();
//         return res.status(200).json({ message: 'Address added successfully', address: user.address });
//       }
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   };
  export const updateAddressList = async (req, res) => {
    try {
      const  userId  = req.userId;
      const addressDetail = req.body;

      // Validate the incoming data
      if (!addressDetail) {
        return res.status(400).json({ message: ' addressDetail required in the request body.' });
      }
  
      let user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (!addressDetail._id){
        user.address.push(addressDetail);
        await user.save();
        return res.status(200).json({ message: 'Address added successfully', address: user.address });
      }
      else{
         user = await User.findOne({ _id: userId, 'address._id':addressDetail._id});
         if (!user) {
          return res.status(404).json({ message: 'address not found' });
         }
          // Find the index of the address by addressId in the user's address
          const addressIndex = user.address.findIndex((item) => item._id.toString() === addressDetail._id);
      
          if (addressIndex !== -1) {
            // If the address exists, update the address
            user.address[addressIndex] = addressDetail;
            await user.save()
            return res.status(200).json({ message: 'Address updated successfully', address: user.address });
          }
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  export const deleteAddress = async (req, res) => {
    try {
      const  userId  = req.userId;
      const { addressId } = req.params;
  
      // Validate the incoming data
      if (!addressId) {
        return res.status(400).json({ message: 'addressId is required in the request query.' });
      }
  
      const  user = await User.findOne({ _id: userId, 'address._id':addressId});
    //   const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User or address not found' });
      }
  
      // Find the index of the address by addressId in the user's address
      const addressIndex = user.address.findIndex((item) => item._id.toString() === addressId);
  
      if (addressIndex !== -1) {
        // If the address exists than delete address
        user.address.splice(addressIndex, 1);
        await user.save();
        return res.status(200).json({ message: 'Address Deleted successfully', address: user.address });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }