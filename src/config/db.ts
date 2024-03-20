import mongoose, { ConnectOptions } from 'mongoose';

class Database {
    private readonly URI: string;

    constructor(uri: string) {
        this.URI = uri;
    }

    public async connect(): Promise<void> {
        try {
            await mongoose.connect(this.URI, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            } as ConnectOptions );
            console.log('Connected to database');
        } catch (error) {
            console.error('Failed to connect to database', error);
            process.exit(1);
        }
    }
}

export default Database;
