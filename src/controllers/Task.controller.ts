import { Request, Response } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
  getEmployeeTasks,
} from "../models/task";
import { handleError } from "../utils/errorhandler";
import { checkEmployeeExists } from "../models/employee";

export const fetchAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();

    return res.status(200).json({
      code: 200,
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    await handleError(error, res);
  }
};

export const fetchEmployeeTasks = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tasks = await getEmployeeTasks(id);
    return res.status(200).json({
      code: 200,
      message:
        tasks.length > 0 ? "Tasks fetched successfully" : "No tasks found",
      data: tasks,
    });
  } catch (error) {
    await handleError(error, res);
  }
};

export const fetchTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await getTaskById(id);
    if (!task) {
      throw new Error("Task not found");
    }
    return res.status(200).json({
      code: 200,
      message: "Task fetched successfully",
      data: task,
    });
  } catch (error) {
    await handleError(error, res);
  }
};

export const newTask = async (req: Request, res: Response) => {
  try {
    const { description, from, to, employeeId } = req.body;

    if (!description || !from || !to || !employeeId) {
      throw new Error("All fields are required");
    }
    if (from > to) {
      throw new Error("From date must be less than to date");
    }

    // check if employee exists
    const existsEmployee = await checkEmployeeExists(employeeId);
    if (!existsEmployee) {
      throw new Error("Employee does not exist");
    }

    const task = await createTask(description, from, to, employeeId);
    if (!task) {
      throw new Error("Faild to create task");
    }
    return res.status(200).json({
      code: 200,
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    await handleError(error, res);
  }
};

export const editTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description, from, to, employeeId } = req.body;
    const task = await updateTask(id, description, from, to, employeeId);
    if (!task) {
      throw new Error("Faild to update task");
    }
    return res.status(200).json({
      code: 200,
      message: "Task updated successfully",
      data: task,
    });
  } catch (error) {
    await handleError(error, res);
  }
};

export const removeTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await deleteTask(id);
    if (!task) {
      throw new Error("Faild to delete task");
    }
    return res.status(200).json({
      code: 200,
      message: "Task deleted successfully",
      data: task,
    });
  } catch (error) {
    await handleError(error, res);
  }
};
