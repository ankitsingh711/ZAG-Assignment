import { User } from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY ||'asasaeuiweHAsbkjYUWb32iuh3ba';

export class AuthService {
  static generateToken(user: User): string {
    return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
  }

  static verifyToken(token: string): { id: string; role: string } {
    return jwt.verify(token, JWT_SECRET) as { id: string; role: string };
  }
}
