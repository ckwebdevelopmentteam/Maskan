import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export const signToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: '1d',
  });
};

export const verifyAuth = (req: NextRequest) => {
  const authHeader = req.headers.get('authorization');
  let token;

  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
  }

  if (!token) {
    return { error: 'Not authorized to access this route', status: 401 };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return { user: decoded, status: 200 };
  } catch (error) {
    return { error: 'Not authorized to access this route', status: 401 };
  }
};
