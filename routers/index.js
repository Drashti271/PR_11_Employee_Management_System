import { Router } from "express";
import userRouter from "./user.route.js";
import taskRouter from "./task.route.js";
const router = Router();

router.use('/userapi',userRouter);
router.use('/',taskRouter);

export default router;