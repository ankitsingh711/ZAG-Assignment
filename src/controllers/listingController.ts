import { Request, Response } from 'express';
import Listing from '../models/Listing';

class ListingController {
  async getAllListings(req: Request, res: Response) {
    const listings = await Listing.find();
    res.json(listings);
  }

  async createListing(req: Request, res: Response) {
    // Create new listing
    const { name, phone, city, address, images } = req.body;
    const listing = new Listing({ name, phone, city, address, images });
    await listing.save();
    res.json(listing);
  }

  async updateListing(req: Request, res: Response) {
    // Update existing listing
    const listingId = req.params.id;
    const { name, phone, city, address, images } = req.body;
    const updatedListing = await Listing.findByIdAndUpdate(listingId, { name, phone, city, address, images }, { new: true });
    res.json(updatedListing);
  }

  async deleteListing(req: Request, res: Response) {
    // Delete existing listing
    const listingId = req.params.id;
    await Listing.findByIdAndDelete(listingId);
    res.json({ message: 'Listing deleted successfully' });
  }
}

export default new ListingController();
