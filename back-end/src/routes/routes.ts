import { Router } from "express";
import usuario from "./usuario.routes";

const routes = Router();

routes.use(usuario);

export default routes;
