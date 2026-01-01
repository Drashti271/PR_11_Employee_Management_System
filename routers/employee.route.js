import { Router } from "express";
import {
    dashboard,
    deleteEmployee,
    updateEmployee,
    viewEmployee,
    loginPage,
    login,
} from "../controllers/employee.controller.js";

import userAuth from "../middlewares/userAuth.middleware.js";
import checkUserRole from "../middlewares/userRole.middleware.js";

const employeeRouter = Router();

employeeRouter.get("/login", loginPage);
employeeRouter.post("/login", login);

employeeRouter.use(userAuth);

employeeRouter.get("/", dashboard);
employeeRouter.get("/viewEmployee", checkUserRole, viewEmployee);

employeeRouter.delete("/delete/:id", checkUserRole, deleteEmployee);
employeeRouter.patch("/update/:id", checkUserRole, updateEmployee);

employeeRouter.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.redirect("/login");
});

export default employeeRouter;
