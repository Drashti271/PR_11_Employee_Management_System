import TaskModel from "../models/task.model.js";

export const addTaskPage = (req,res) => {
    return res.render('./')
}

export const addTask = async (req, res) => {
    try {
        const { name, date, description } = req.body;

        await TaskModel.create({
            name,
            date,
            description
        });

        console.log("Task Added");
        return res.redirect('/api/view-task');
    } catch (error) {
        console.log(error.message);
        return res.redirect('/api/add-task');
    }
};

export const viewTask = async (req, res) => {
    try {
        const tasks = await TaskModel.find({}, {
            name: 1,
            date: 1,
            description: 1
        });

        return res.render('./pages/view-task.ejs', {
            data: tasks
        });
    } catch (error) {
        console.log(error.message);
        return res.render('./pages/view-task.ejs', {
            data: []
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, date, description } = req.body;

        await TaskModel.updateOne(
            { _id: id },
            { $set: { name, date, description } }
        );

        console.log("Task Updated");
        return res.redirect('/api/view-task');
    } catch (error) {
        console.log(error.message);
        return res.redirect('/api/view-task');
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        await TaskModel.deleteOne({ _id: id });
        console.log("Task Deleted");

        return res.redirect('/api/view-task');
    } catch (error) {
        console.log(error.message);
        return res.redirect('/api/view-task');
    }
};
