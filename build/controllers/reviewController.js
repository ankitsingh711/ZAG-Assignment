"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Review_1 = __importDefault(require("../models/Review"));
class ReviewController {
    async getAllReviews(req, res) {
        const reviews = await Review_1.default.find();
        res.json(reviews);
    }
    async createReview(req, res) {
        // Create new review
        const { userId, listingId, rating, comment } = req.body;
        const review = new Review_1.default({ userId, listingId, rating, comment });
        await review.save();
        res.json(review);
    }
    async updateReview(req, res) {
        // Update existing review
        const reviewId = req.params.id;
        const { rating, comment } = req.body;
        const updatedReview = await Review_1.default.findByIdAndUpdate(reviewId, { rating, comment }, { new: true });
        res.json(updatedReview);
    }
    async deleteReview(req, res) {
        // Delete existing review
        const reviewId = req.params.id;
        await Review_1.default.findByIdAndDelete(reviewId);
        res.json({ message: 'Review deleted successfully' });
    }
}
exports.default = new ReviewController();
