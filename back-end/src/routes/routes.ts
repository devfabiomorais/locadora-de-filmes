import { Router } from "express";
import usuario from "./usuario.routes";
import filmes from "./filmes.routes";
import generos from "./generos.routes";

const routes = Router();

routes.use(usuario);
routes.use(filmes);
routes.use(generos);

export default routes;
