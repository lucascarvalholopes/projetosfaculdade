import { Router } from "express";
import getAll from "../controller/Room/getAll";
import getOneRoom from "../controller/Room/getOneRoom";
import createRoom from "../controller/Room/createRoom";
import updateOneRoom from "../controller/Room/updateOneRoom";
import deleteOneRoom from "../controller/Room/deleteOneRoom";

const roomRouter = Router();

//retorna todas as salas do sistema
roomRouter.get('/', getAll);

//retorna uma sala em específico
roomRouter.get('/:id', getOneRoom);

// cadastra uma nova sala no sistema
roomRouter.post('/', createRoom);

// atualiza uma sala em específico
roomRouter.put('/:id', updateOneRoom);

// deleta uma sala em específico, irreversível
roomRouter.delete('/:id', deleteOneRoom);

export default roomRouter;