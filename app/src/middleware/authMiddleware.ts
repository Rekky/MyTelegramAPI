import { Request, Response, NextFunction } from 'express';
import TokenService from '../services/tokenService';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];    

  if (!authHeader) return res.status(401).send({ message: 'Token is required' });  

  const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"  
  
  try {    
    const user = TokenService.verifyAuthToken(token);
    // Opcional: adjuntar el payload del usuario al objeto de solicitud para su uso posterior
    // req.user = user;
    next();
  } catch (error) {
    return res.status(403).send({ message: 'Invalid or expired token' });
  }

};

export default authMiddleware;
