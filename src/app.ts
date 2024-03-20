import express, { Request, Response } from "express";
import logger from "./logger";
import DbService from "./config/db";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURL = process.env.mongoURL || "mongodb://localhost:27017/ZAGDB";

app.use(express.json());

app.use('/auth', authRoutes);

app.listen(PORT, async () => {
  await DbService.getInstance().connect(mongoURL);
  logger.info(`Server is running on port ${PORT}`);
});
