"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor(uri) {
        this.URI = uri;
    }
    async connect() {
        try {
            await mongoose_1.default.connect(this.URI, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
            console.log('Connected to database');
        }
        catch (error) {
            console.error('Failed to connect to database', error);
            process.exit(1);
        }
    }
}
exports.default = Database;
