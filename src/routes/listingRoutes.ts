import express from 'express';
import listingController from '../controllers/listingController';
import listingAccessMiddleware from '../middleware/listingMiddleware';

const router = express.Router();

router.get('/', listingAccessMiddleware, listingController.getAllListings);
router.post('/', listingAccessMiddleware, listingController.createListing);
router.put('/:id', listingAccessMiddleware, listingController.updateListing);
router.delete('/:id', listingAccessMiddleware, listingController.deleteListing);

export default router;
