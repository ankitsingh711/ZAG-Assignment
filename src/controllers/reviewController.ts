import { Request, Response } from 'express';
import Review from '../models/Review';

class ReviewController {
  async getAllReviews(req: Request, res: Response) {
    const reviews = await Review.find();
    res.json(reviews);
  }

  async createReview(req: Request, res: Response) {
    // Create new review
    const { userId, listingId, rating, comment } = req.body;
    const review = new Review({ userId, listingId, rating, comment });
    await review.save();
    res.json(review);
  }

  async updateReview(req: Request, res: Response) {
    // Update existing review
    const reviewId = req.params.id;
    const { rating, comment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(reviewId, { rating, comment }, { new: true });
    res.json(updatedReview);
  }

  async deleteReview(req: Request, res: Response) {
    // Delete existing review
    const reviewId = req.params.id;
    await Review.findByIdAndDelete(reviewId);
    res.json({ message: 'Review deleted successfully' });
  }
}

export default new ReviewController();
