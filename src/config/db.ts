import logger from '../logger';
import mongoose, { Connection } from 'mongoose';

class DbService {
  private static instance: DbService;
  private connection: Connection | null = null;

  private constructor() {}

  public static getInstance(): DbService {
    if (!DbService.instance) {
      DbService.instance = new DbService();
    }
    return DbService.instance;
  }

  public async connect(url: string): Promise<void> {
    try {
      this.connection = await mongoose.createConnection(url);
      logger.info('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  public getConnection(): Connection {
    if (!this.connection) {
      throw new Error('Database is not connected');
    }
    return this.connection;
  }

  public async disconnect(): Promise<void> {
    try {
      await this.connection?.close();
      console.log('Disconnected from MongoDB');
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error);
      throw error;
    }
  }
}

export default DbService;
