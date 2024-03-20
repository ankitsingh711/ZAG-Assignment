"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listingController_1 = __importDefault(require("../controllers/listingController"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = express_1.default.Router();
router.get('/', listingController_1.default.getAllListings);
router.post('/', authMiddleware_1.default, listingController_1.default.createListing);
router.put('/:id', authMiddleware_1.default, listingController_1.default.updateListing);
router.delete('/:id', authMiddleware_1.default, listingController_1.default.deleteListing);
exports.default = router;
