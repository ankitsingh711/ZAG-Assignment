import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import logger from "../logger/index";
import dotenv from 'dotenv';
import { AuthService } from "../services/authServices";
dotenv.config();

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || '10');

class AuthController {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
      req.body.role = user.role;
      const token = AuthService.generateToken(req.body);

      // Send token as response
      res.send({msg: 'Logged In !' ,token });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { username, password, role } = req?.body;
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      const newUser = new User({ username, password: hashedPassword, role });
      await newUser.save();

      const token = AuthService.generateToken(req.body);

      res.send({ msg: "User registered successfully !", token });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}

export default new AuthController();
