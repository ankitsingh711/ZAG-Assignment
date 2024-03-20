import { User } from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY || 'asasaeuiweHAsbkjYUWb32iuh3ba';

export class AuthService {
  static generateToken(user: User): string {
    const { username, role } = user;
    return jwt.sign({ username, role }, JWT_SECRET, { expiresIn: '1d' });
  }

  static verifyToken(token: string): { username: string; role: string } {
    try {
      const decodedToken = jwt.verify(token, JWT_SECRET) as { username: string; role: string };
      return { username: decodedToken.username, role: decodedToken.role };
    } catch (error) {
      console.error('Token verification error:', error);
      throw new Error('Invalid token');
    }
  }
}
