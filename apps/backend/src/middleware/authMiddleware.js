// Middleware to verify JWT and extract user ID
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || "i_cant_share_key";

const authMiddleware = (req, res, next) => {
    const authToken = req.header('Authorization');
    let token = authToken;
    if (authToken.startsWith("Bearer ")){
      token = authToken.substring(7, authToken.length);
    }

    
    if (!token) {
      return res.status(401).json({ message: 'Authorization token not found' });
    }
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.userId = decoded.userId;
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Invalid token or user is unauthorized' });
    }
  };

export default authMiddleware