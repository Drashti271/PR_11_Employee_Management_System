import TaskModel from "../models/task.model.js";
import axiosInstance from "../configs/axiosInstance.js";

export const addTaskPage = (req,res) => {
    return res.render('./pages/addTask.ejs')
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
        return res.redirect('/api/viewTask');
    } catch (error) {
        console.log(error.message);
        return res.redirect('/api/addTask');
    }
};

export const viewTask = async (req, res) => {
    try {
        const tasks = await TaskModel.find({}, {
            name: 1,
            date: 1,
            description: 1
        });

        return res.render('./pages/viewTask.ejs', {
            data: tasks
        });
    } catch (error) {
        console.log(error.message);
        return res.render('./pages/viewTask.ejs', {
            data: []
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, date, description } = req.body;

        await TaskModel.updateOne(
            { _id: id }
        );

        console.log("Task Updated");
        return res.redirect('/api/viewTask');
    } catch (error) {
        console.log(error.message);
        return res.redirect('/api/viewTask');
    }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      console.log("ID not received");
      return res.redirect('/api/viewTask');
    }

    const task = await TaskModel.findByIdAndDelete(id);

    if (!task) {
      console.log("Task not found");
    } else {
      console.log("Task Deleted Successfully");
    }

    return res.redirect('/api/viewTask');
  } catch (error) {
    console.log("Delete Error:", error.message);
    return res.redirect('/api/viewTask');
  }
};

