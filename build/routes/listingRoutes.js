"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listingController_1 = __importDefault(require("../controllers/listingController"));
const accessMiddleware_1 = require("../middleware/accessMiddleware");
const router = express_1.default.Router();
router.get("/", accessMiddleware_1.listingAccessMiddleware, listingController_1.default.getAllListings);
router.post("/", accessMiddleware_1.listingAccessMiddleware, listingController_1.default.createListing);
router.put("/:id", accessMiddleware_1.listingAccessMiddleware, listingController_1.default.updateListing);
router.delete("/:id", accessMiddleware_1.listingAccessMiddleware, listingController_1.default.deleteListing);
exports.default = router;
