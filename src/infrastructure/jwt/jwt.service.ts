import jwt from 'jsonwebtoken';
import { JwtPayload } from '../../domain/jwt.payload';

const SECRET = process.env.JWT_SECRET || 'changeme';

export const JwtService = {
  generate(payload: JwtPayload) {
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
  },
  verify(token: string): JwtPayload {
    return jwt.verify(token, SECRET) as JwtPayload;
  }
};