import { Schema, model, Document } from 'mongoose';

interface Listing extends Document {
  name: string;
  phone: string;
  city: string;
  address: string;
  images: string[];
}

const listingSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  images: [{ type: String }],
});

export default model<Listing>('Listing', listingSchema);
