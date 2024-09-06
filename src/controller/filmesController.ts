import { Request, Response } from "express";
import repository from "../repository/filmesRepository";
import { handleException, ModuleError } from "../exception";

export default {
  async create(req: Request, res: Response) {
    try {
        const requiredFields = [
            "nome",
            "generoId",
            "duracao",
        ];
        const { generoId } = req.body; // Extraia o id do corpo da requisição
            if (typeof generoId !== 'number') {
        return res.status(400).json({ error: 'generoId deve ser um número' });
      }
        

     
      const createFilme = await repository.create(req.body);
      
      return res.status(201).json(createFilme);
    } catch (e) {
      return handleException(e, res);
    }
  },
};