import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

dotenv.config();

const SECRET = process.env.SECRET_KEY as string;

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ message: "Token não encontrado" });
  }

  const token = authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token invalido" });
  }

  jwt.verify(token as string, SECRET, (error) => {
    if (error) {
      return res.status(403).json({ message: "Não autorizado" });
    }
    next();
  });
}
