import jwt from 'jsonwebtoken';

export function generateToken(payload: any): string {
    return jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });
}

export function verifyToken(token: string): any {
    return jwt.verify(token, 'your-secret-key');
}
