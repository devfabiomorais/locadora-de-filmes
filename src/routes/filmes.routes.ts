import { Router } from "express";
import filmesController from "../controller/filmesController";

const routes = Router();

routes.post("/filmes", filmesController.create);
routes.get("/filmes/id", filmesController.findByID);
  

export default routes;
