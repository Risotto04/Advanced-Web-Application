import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { JWT_KEY } = process.env;

  if (!JWT_KEY) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error: JWT key not found",
    });
  }

  const token = req.cookies?.Authorization;
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Access Denied! No token provided",
    });
  }

  try {
    const verified = jwt.verify(token, JWT_KEY) as JwtPayload;
    if (verified && verified.id) {
      req.id = verified.id;
      next();
    } else {
      return res.status(400).json({
        status: 400,
        message: "Auth failed: Invalid token structure",
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: 400,
      message: "Auth failed: Invalid token",
    });
  }
}
