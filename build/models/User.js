"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['BusinessOwner', 'User', 'Admin'], required: true },
});
exports.default = (0, mongoose_1.model)('User', userSchema);
