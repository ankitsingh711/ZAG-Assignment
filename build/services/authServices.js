"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET_KEY || 'asasaeuiweHAsbkjYUWb32iuh3ba';
class AuthService {
    static generateToken(user) {
        const { username, role } = user;
        return jsonwebtoken_1.default.sign({ username, role }, JWT_SECRET, { expiresIn: '1d' });
    }
    static verifyToken(token) {
        try {
            const decodedToken = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            return { username: decodedToken.username, role: decodedToken.role };
        }
        catch (error) {
            console.error('Token verification error:', error);
            throw new Error('Invalid token');
        }
    }
}
exports.AuthService = AuthService;
