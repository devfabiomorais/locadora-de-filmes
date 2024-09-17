import { Router } from "express";
import filmesController from "../controller/filmesController";

const routes = Router();

routes.post("/filmes", filmesController.create);
routes.get("/filmes/id", filmesController.findByID);
routes.put("/filmes/alugado", filmesController.changeStatus);
routes.get("/filmes/encontrar/:description", filmesController.findByDescription);
routes.get("/filmes/alugados", filmesController.encontrarAlugados);
  

export default routes;
