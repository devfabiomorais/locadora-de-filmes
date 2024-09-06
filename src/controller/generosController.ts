import { Request, Response } from "express";
import repository from "../repository/generosRepository";
import { handleException, ModuleError } from "../exception";

export default {
  async create(req: Request, res: Response) {
    try {
        const requiredFields = [
            "genero",
        ];    

     
      const createGenero = await repository.create(req.body);
      
      return res.status(201).json(createGenero);
    } catch (e) {
      return handleException(e, res);
    }
  },
};