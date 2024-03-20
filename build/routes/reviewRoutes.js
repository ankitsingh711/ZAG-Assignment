"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewController_1 = __importDefault(require("../controllers/reviewController"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = express_1.default.Router();
router.get('/', reviewController_1.default.getAllReviews);
router.post('/', authMiddleware_1.default, reviewController_1.default.createReview);
router.put('/:id', authMiddleware_1.default, reviewController_1.default.updateReview);
router.delete('/:id', authMiddleware_1.default, reviewController_1.default.deleteReview);
exports.default = router;
