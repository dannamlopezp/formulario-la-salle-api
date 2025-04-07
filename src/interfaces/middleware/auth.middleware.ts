import { RequestHandler } from 'express';
import { JwtService } from '../../infrastructure/jwt/jwt.service';

export const authenticateJWT: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Token missing or malformed' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    JwtService.verify(token);
    next(); 
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};