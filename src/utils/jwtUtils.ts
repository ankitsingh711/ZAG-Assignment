import jwt from "jsonwebtoken";
import User from "../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

const generateToken = (username: string) => {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
};

const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export default { generateToken, verifyToken };
