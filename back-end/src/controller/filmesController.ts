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

  async changeStatus(req: Request, res: Response) {
    try {
      const { id } = req.body; // Extraia o id do corpo da requisição
      if (typeof id !== 'number') {
        return res.status(400).json({ error: 'ID deve ser um número' });
      }

      const filme = await repository.findByID(Number(id));

      if (!filme) throw new ModuleError("Filme não encontrado", 404);

      const filmeChangeStatus = await repository.changeStatus(
        Number(id),
        !filme.alugado,
      );

      res.status(200).json(filmeChangeStatus);
    } catch (e) {
      return handleException(e, res);
    }
  },

  async findByDescription(req: Request, res: Response) {
    try {
      const { description } = req.params;
            
      const findedDescription = await repository.findByDescription(description);
      
      return res.status(200).json(findedDescription);
      
    } catch (e) {
      return handleException(e, res);
    }
  },

  async encontrarAlugados(req: Request, res: Response) {
    try {
      const alugadosEncontrados = await repository.encontrarAlugados();
      
      return res.status(200).json(alugadosEncontrados);
      
    } catch (e) {
      return handleException(e, res);
    }
  },

};