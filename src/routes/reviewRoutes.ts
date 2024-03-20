import express from 'express';
import reviewController from '../controllers/reviewController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', reviewController.getAllReviews);
router.post('/', authMiddleware, reviewController.createReview);
router.put('/:id', authMiddleware, reviewController.updateReview);
router.delete('/:id', authMiddleware, reviewController.deleteReview);

export default router;
