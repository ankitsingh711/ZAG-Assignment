"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewController_1 = __importDefault(require("../controllers/reviewController"));
const accessMiddleware_1 = require("../middleware/accessMiddleware");
const router = express_1.default.Router();
router.get('/', accessMiddleware_1.reviewAccessMiddleware, reviewController_1.default.getAllReviews);
router.post('/', accessMiddleware_1.reviewAccessMiddleware, reviewController_1.default.createReview);
router.put('/:id', accessMiddleware_1.reviewAccessMiddleware, reviewController_1.default.updateReview);
router.delete('/:id', accessMiddleware_1.reviewAccessMiddleware, reviewController_1.default.deleteReview);
exports.default = router;
