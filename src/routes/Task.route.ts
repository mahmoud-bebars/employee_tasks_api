import express, { Router } from "express";
import {
  fetchAllTasks,
  fetchEmployeeTasks,
  fetchTask,
  newTask,
  editTask,
  removeTask,
} from "../controllers/Task.controller";

// Initialize the router
const authRouter: Router = express.Router();

// fetch All Tasks Route
authRouter.get("/", fetchAllTasks);

// fetch Employee Tasks Route
authRouter.get("/employee/:id", fetchEmployeeTasks);

// fetch Task Route
authRouter.get("/:id", fetchTask);

// New Task Route
authRouter.post("/", newTask);

// Update Task Route
authRouter.put("/:id", editTask);

// Delete Task Route
authRouter.delete("/:id", removeTask);

// Exporting the router as the default export
export default authRouter;
