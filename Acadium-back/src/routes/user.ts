import { Router } from "express";
import getAll from "../controller/User/getAll";
import getOneUser from "../controller/User/getOneUser";
import createUser from "../controller/User/createUser";
import updateOneUser from "../controller/User/updateOneUser";
import updatePasswordUser from "../controller/User/updatePasswordUser";
import deleteOneUser from "../controller/User/deleteOneUser";

const userRouter = Router();

//retorna todos os usuários do sistema
userRouter.get('/', getAll);

//retorna um usuário em específico
userRouter.get('/:cpf', getOneUser);

// cadastra um novo usuário no sistema
userRouter.post('/', createUser);

// atualiza um usuário em específico
userRouter.put('/:id', updateOneUser);

// atualiza a senha de um usuário em específico
userRouter.put('/password/:id', updatePasswordUser);

// deleta um usuário em específico, irreversível
userRouter.delete('/:id', deleteOneUser);

export default userRouter;