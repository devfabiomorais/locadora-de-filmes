import { Response } from "express";

export class ModuleError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = "ModuleError";
  }
}

export function moduleException(message: string, status: number) {
  throw new ModuleError(message, status);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleException(err: any, res?: Response) {
  if (err instanceof ModuleError) {
    if (res) {
      return res.status(err.status).json({ error: err.message });
    }
  } else {
    if (res) {
      return res.status(500).json({
        error: "Internal Server Error",
        name: err.name,
        message: err.message,
      });
    }
  }
}
