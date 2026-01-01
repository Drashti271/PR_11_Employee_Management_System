import axiosInstance from "../configs/axiosInstance.js";

export const dashboard = (req, res) => {
    return res.render("index.ejs");
};

export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        await axiosInstance.delete(`/user/${id}`);
        console.log("User Deleted Successfully");

        return res.redirect(req.get("Referrer") || "/");
    } catch (error) {
        console.log(error.response?.data || error.message);
        return res.redirect(req.get("Referrer") || "/");
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        await axiosInstance.patch(`/user/${id}`, req.body);
        console.log("User Updated Successfully");

        return res.redirect(req.get("Referrer") || "/");
    } catch (error) {
        console.log(error.response?.data || error.message);
        return res.redirect(req.get("Referrer") || "/");
    }
};

export const viewEmployee = async (req, res) => {
    try {
        const response = await axiosInstance.get("/user");

        return res.render("./pages/viewEmployee.ejs", {
            data: response.data,
        });
    } catch (error) {
        console.log(error.response?.data || error.message);
        return res.render("./pages/viewEmployee.ejs", {
            data: [],
        });
    }
};

export const loginPage = (req, res) => {
    return res.render("./pages/login.ejs");
};

export const login = async (req, res) => {
    try {
        const response = await axiosInstance.post("/user/login", req.body);

        if (response.data.token) {
            res.cookie("token", response.data.token, {
                httpOnly: true,
            });

            console.log("Login Successful");
            return res.redirect("/");
        } else {
            console.log("User not found");
            return res.redirect("/login");
        }
    } catch (error) {
        console.log(error.response?.data || error.message);
        return res.redirect("/login");
    }
};
