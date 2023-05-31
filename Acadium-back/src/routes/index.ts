import { Router } from "express";
import reserveRouter from "./reserve";
import roomRouter from "./room";
import userRouter from "./user";
import Auth from "../controller/Auth";
import authMiddleware from "../middleware/auth";

const router = Router();

router.post('/login', Auth);

router.use('/user', authMiddleware, userRouter);
router.use('/reserve', authMiddleware, reserveRouter);
router.use('/room', authMiddleware, roomRouter);

export default router;