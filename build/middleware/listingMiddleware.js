"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listingAccess = {
    BusinessOwner: { create: true, read: true, update: true, delete: false },
    User: { create: false, read: true, update: false, delete: false },
    Admin: { create: true, read: true, update: true, delete: true },
};
const listingAccessMiddleware = (req, res, next) => {
    const { role } = req.user;
    const access = listingAccess[role];
    if (!access) {
        return res.status(403).json({ message: 'Forbidden: Role not found' });
    }
    const { method } = req;
    if (!access[method]) {
        return res.status(403).json({ message: 'Forbidden: Operation not allowed for this role' });
    }
    next();
};
exports.default = listingAccessMiddleware;
