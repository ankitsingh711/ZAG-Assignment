"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authServices_1 = require("../services/authServices");
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }
    try {
        const decoded = authServices_1.AuthService.verifyToken(token);
        req.user = decoded;
        req.role = decoded.role;
        next();
    }
    catch (error) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
};
exports.default = authMiddleware;
