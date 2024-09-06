import { Router } from "express";
import filmesController from "../controller/filmesController";

const routes = Router();

routes.post("/filmes", filmesController.create);
  

export default routes;
