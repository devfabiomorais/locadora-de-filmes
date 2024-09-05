import { Router } from "express";
import usuarioController from "../controller/usuarioController";

const routes = Router();

routes.post("/usuario", usuarioController.create);
routes.get("/usuario/id", usuarioController.findByID);

routes.get("/test", (req, res) => {
    res.send("Servidor funcionando!");
  });
  

export default routes;
