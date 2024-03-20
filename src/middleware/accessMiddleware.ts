import { Request, Response, NextFunction } from "express";

const getOperationFromMethod = (method: string): keyof ListingAccess => {
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

interface ListingAccess {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

const listingAccess: Record<string, ListingAccess> = {
  BusinessOwner: { create: true, read: true, update: true, delete: false },
  User: { create: false, read: true, update: false, delete: false },
  Admin: { create: true, read: true, update: true, delete: true },
};
const reviewAccess: Record<string, ListingAccess> = {
  BusinessOwner: { create: false, read: true, update: true, delete: false },
  User: { create: true, read: true, update: true, delete: true },
  Admin: { create: true, read: true, update: true, delete: true },
};

const listingAccessMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { role } = req.user;

  const access = listingAccess[role];
  if (!access) {
    return res.status(403).json({ message: "Forbidden: Role not found" });
  }

  const { method } = req;
  const operation = getOperationFromMethod(method as string);
  if (access[operation]) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Forbidden: Operation not allowed for this role" });
  }
};
const reviewAccessMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { role } = req.user;

  const access = reviewAccess[role];
  if (!access) {
    return res.status(403).json({ message: "Forbidden: Role not found" });
  }

  const { method } = req;
  const operation = getOperationFromMethod(method as string);
  if (access[operation]) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Forbidden: Operation not allowed for this role" });
  }
};

export { listingAccessMiddleware, reviewAccessMiddleware };
