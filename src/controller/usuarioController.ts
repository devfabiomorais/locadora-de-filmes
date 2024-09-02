import { Request, Response } from "express";
import repository from "../repository/usuarioRepository";
import { handleException, ModuleError } from "../exception";

export default {
  async create(req: Request, res: Response) {
    try {
      const requiredFields = [
        "name",
        "email",
        "cpf",
      ];

     
      const createUser = await repository.create(req.body);
      
      return res.status(201).json(createUser);
    } catch (e) {
      return handleException(e, res);
    }
  },
};
