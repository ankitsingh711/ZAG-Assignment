import { Request, Response } from 'express';
import jwtUtils from '../utils/jwtUtils';

class AuthController {
  async login(req: Request, res: Response) {
    // Authenticate user (validate credentials)
    // If authenticated, generate JWT token
    const token = jwtUtils.generateToken(req.body.username);
    res.json({ token });
  }

  async register(req: Request, res: Response) {
    // Register new user (create user in database)
    // Return success response
    res.json({ message: 'User registered successfully' });
  }
}

export default new AuthController();
