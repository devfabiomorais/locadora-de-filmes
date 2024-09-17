import { Router } from "express";
import generosController from "../controller/generosController";

const routes = Router();

routes.post("/generos", generosController.create);
  

export default routes;
