import express, { Router } from "express";
import {
  editEmployee,
  fetchEmployees,
  fetchEmployeesWithTasks,
  fetchEmployeeWithTasks,
  newEmployee,
  removeEmployee,
} from "../controllers/Employee.controller";

// Initialize the router
const usersRouter: Router = express.Router();

// fetch All Employees Route
usersRouter.get("/", fetchEmployees);

// fetch All Employees with Tasks Route
usersRouter.get("/with-tasks", fetchEmployeesWithTasks);

// fetch Employee with Tasks Route
usersRouter.get("/:id", fetchEmployeeWithTasks);

// New Employee Route
usersRouter.post("/", newEmployee);

// Update Employee Route
usersRouter.put("/:id", editEmployee);

// Delete Employee Route
usersRouter.delete("/:id", removeEmployee);

// Exporting the router as the default export
export default usersRouter;
