import { Router } from "express";
import { addTaskPage, addTask, viewTask, deleteTask, updateTask } from "../controllers/task.controller.js";
const taskRouter = Router();

taskRouter.get('/addTask',addTaskPage);
taskRouter.post('/addTask',addTask);
taskRouter.get('/viewTask',viewTask);
taskRouter.get('/deleteTask/:id',deleteTask);
taskRouter.post('/updateTask/:id',updateTask);

export default taskRouter; 