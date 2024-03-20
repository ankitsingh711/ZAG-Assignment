"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const index_1 = __importDefault(require("../logger/index"));
const dotenv_1 = __importDefault(require("dotenv"));
const authServices_1 = require("../services/authServices");
dotenv_1.default.config();
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || '10');
class AuthController {
    async login(req, res) {
        const { username, password } = req.body;
        try {
            const user = await User_1.default.findOne({ username });
            if (!user || !(await bcrypt_1.default.compare(password, user.password))) {
                return res.status(401).json({ message: "Invalid username or password" });
            }
            const token = authServices_1.AuthService.generateToken(username);
            // Send token as response
            res.send({ msg: 'Logged In !', token });
        }
        catch (error) {
            index_1.default.error(error);
            res.status(500).json({ message: "Internal Server Error", error });
        }
    }
    async register(req, res) {
        try {
            const { username, password, role } = req === null || req === void 0 ? void 0 : req.body;
            const existingUser = await User_1.default.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ message: "Username already exists" });
            }
            const hashedPassword = await bcrypt_1.default.hash(password, SALT_ROUNDS);
            const newUser = new User_1.default({ username, password: hashedPassword, role });
            await newUser.save();
            const token = authServices_1.AuthService.generateToken(username);
            res.send({ msg: "User registered successfully !", token });
        }
        catch (error) {
            index_1.default.error(error);
            res.status(500).json({ message: "Internal Server Error", error });
        }
    }
}
exports.default = new AuthController();
