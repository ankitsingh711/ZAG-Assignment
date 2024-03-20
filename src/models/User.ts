import { Schema, model, Document } from 'mongoose';

 export interface User extends Document {
  username: string;
  password: string;
  role: string;
}

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['BusinessOwner', 'User', 'Admin'], required: true },
});

export default model<User>('User', userSchema);
