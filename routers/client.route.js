import { Router } from "express";
import { addManagerPage, dashboard, addManager, deleteManager, updateManager, viewManager, loginPage, login, logout } from "../controllers/client.controller.js";
import userAuth from "../middlewares/userAuth.middleware.js";
import checkUserRole from "../middlewares/userRole.middleware.js";

const clientRouter = Router();

clientRouter.get('/login',loginPage);
clientRouter.post('/login',login);
clientRouter.get('/logout',logout);

clientRouter.use(userAuth);

clientRouter.get('/',dashboard);
clientRouter.get('/addManager',checkUserRole,addManagerPage);
clientRouter.post('/addManager',checkUserRole,addManager);
clientRouter.get('/viewManager',checkUserRole,viewManager);
clientRouter.get('/delete/:id',checkUserRole,deleteManager);
clientRouter.get('/update/:id',checkUserRole,updateManager);

export default clientRouter;