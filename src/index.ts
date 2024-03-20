import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import listingRoutes from "./routes/listingRoutes";
import reviewRoutes from "./routes/reviewRoutes";
import authMiddleware from "./middleware/authMiddleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/restaurant-listing";

app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/listings", authMiddleware, listingRoutes);
app.use("/reviews", authMiddleware, reviewRoutes);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("MongoDB connection error:", error));
