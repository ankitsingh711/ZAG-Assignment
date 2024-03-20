import { Schema, model, Document } from 'mongoose';

interface Review extends Document {
  userId: Schema.Types.ObjectId;
  listingId: Schema.Types.ObjectId;
  rating: number;
  comment: string;
}

const reviewSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  listingId: { type: Schema.Types.ObjectId, required: true, ref: 'Listing' },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

export default model<Review>('Review', reviewSchema);
