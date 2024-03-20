import express from 'express';
import reviewController from '../controllers/reviewController';
import { reviewAccessMiddleware } from "../middleware/accessMiddleware";


const router = express.Router();

router.get('/', reviewAccessMiddleware, reviewController.getAllReviews);
router.post('/', reviewAccessMiddleware, reviewController.createReview);
router.put('/:id', reviewAccessMiddleware, reviewController.updateReview);
router.delete('/:id', reviewAccessMiddleware, reviewController.deleteReview);

export default router;
