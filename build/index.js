"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const listingRoutes_1 = __importDefault(require("./routes/listingRoutes"));
const reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes"));
const authMiddleware_1 = __importDefault(require("./middleware/authMiddleware"));
const logger_1 = __importDefault(require("./logger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/restaurant-listing";
app.use(express_1.default.json());
// Routes
app.use("/auth", authRoutes_1.default);
app.use("/listings", authMiddleware_1.default, listingRoutes_1.default);
app.use("/reviews", authMiddleware_1.default, reviewRoutes_1.default);
// Connect to MongoDB
mongoose_1.default
    .connect(MONGODB_URI, {})
    .then(() => {
    logger_1.default.info("Connected to MongoDB");
    app.listen(PORT, () => logger_1.default.info(`Server running on port ${PORT}`));
})
    .catch((error) => console.error("MongoDB connection error:", error));
