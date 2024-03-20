import { Request, Response, NextFunction } from 'express';

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

const listingAccessMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.user;

  const access = listingAccess[role];
  if (!access) {
    return res.status(403).json({ message: 'Forbidden: Role not found' });
  }

  const { method } = req;
  if (!access[method as keyof ListingAccess]) {
    return res.status(403).json({ message: 'Forbidden: Operation not allowed for this role' });
  }
  next();
};

export default listingAccessMiddleware;
