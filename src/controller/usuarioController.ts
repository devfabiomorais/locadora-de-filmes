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

  async findByID(req: Request, res: Response) {
    try {
      const { id } = req.body; // Extraia o id do corpo da requisição
      if (typeof id !== 'number') {
        return res.status(400).json({ error: 'ID deve ser um número' });
      }
      
      const findID = await repository.findByID(id);
      
      return res.status(200).json(findID);
      
    } catch (e) {
      return handleException(e, res);
    }
  },
};
