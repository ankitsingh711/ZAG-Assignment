import express from 'express';
import listingController from '../controllers/listingController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', listingController.getAllListings);
router.post('/', authMiddleware, listingController.createListing);
router.put('/:id', authMiddleware, listingController.updateListing);
router.delete('/:id', authMiddleware, listingController.deleteListing);

export default router;
