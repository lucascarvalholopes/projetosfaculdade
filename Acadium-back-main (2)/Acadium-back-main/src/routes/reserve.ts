import { Router } from "express";
import getAll from "../controller/Reserve/getAll";
import getOneReserve from "../controller/Reserve/getOneReserve";
import createReserve from "../controller/Reserve/createReserve";
import updateOneReserve from "../controller/Reserve/updateOneReserve";
import deleteOneReserve from "../controller/Reserve/deleteOneReserve";

const reserveRouter = Router();

//retorna todas as reservas do sistema
reserveRouter.get('/',getAll);

//retorna uma reserva em específico
reserveRouter.get('/:id',getOneReserve);

// cadastra uma nova reserva no sistema
reserveRouter.post('/',createReserve);

// atualiza uma reserva em específico
reserveRouter.put('/:id',updateOneReserve);

// deleta uma reserva em específico, irreversível
reserveRouter.delete('/:id',deleteOneReserve);

export default reserveRouter;