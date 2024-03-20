"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Listing_1 = __importDefault(require("../models/Listing"));
class ListingController {
    async getAllListings(req, res) {
        const listings = await Listing_1.default.find();
        res.json(listings);
    }
    async createListing(req, res) {
        // Create new listing
        const { name, phone, city, address, images } = req.body;
        const listing = new Listing_1.default({ name, phone, city, address, images });
        await listing.save();
        res.json(listing);
    }
    async updateListing(req, res) {
        // Update existing listing
        const listingId = req.params.id;
        const { name, phone, city, address, images } = req.body;
        const updatedListing = await Listing_1.default.findByIdAndUpdate(listingId, { name, phone, city, address, images }, { new: true });
        res.json(updatedListing);
    }
    async deleteListing(req, res) {
        // Delete existing listing
        const listingId = req.params.id;
        await Listing_1.default.findByIdAndDelete(listingId);
        res.json({ message: 'Listing deleted successfully' });
    }
}
exports.default = new ListingController();
