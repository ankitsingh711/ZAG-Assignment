"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewAccessMiddleware = exports.listingAccessMiddleware = void 0;
const getOperationFromMethod = (method) => {
    switch (method) {
        case "POST":
            return "create";
        case "GET":
            return "read";
        case "PUT":
            return "update";
        case "DELETE":
            return "delete";
        default:
            throw new Error("Invalid HTTP method");
    }
};
const listingAccess = {
    BusinessOwner: { create: true, read: true, update: true, delete: false },
    User: { create: false, read: true, update: false, delete: false },
    Admin: { create: true, read: true, update: true, delete: true },
};
const reviewAccess = {
    BusinessOwner: { create: false, read: true, update: true, delete: false },
    User: { create: true, read: true, update: true, delete: true },
    Admin: { create: true, read: true, update: true, delete: true },
};
const listingAccessMiddleware = (req, res, next) => {
    const { role } = req.user;
    const access = listingAccess[role];
    if (!access) {
        return res.status(403).json({ message: "Forbidden: Role not found" });
    }
    const { method } = req;
    const operation = getOperationFromMethod(method);
    if (access[operation]) {
        next();
    }
    else {
        return res
            .status(403)
            .json({ message: "Forbidden: Operation not allowed for this role" });
    }
};
exports.listingAccessMiddleware = listingAccessMiddleware;
const reviewAccessMiddleware = (req, res, next) => {
    const { role } = req.user;
    const access = reviewAccess[role];
    if (!access) {
        return res.status(403).json({ message: "Forbidden: Role not found" });
    }
    const { method } = req;
    const operation = getOperationFromMethod(method);
    if (access[operation]) {
        next();
    }
    else {
        return res
            .status(403)
            .json({ message: "Forbidden: Operation not allowed for this role" });
    }
};
exports.reviewAccessMiddleware = reviewAccessMiddleware;
