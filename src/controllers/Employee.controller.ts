import { Request, Response } from "express";

import {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getAllEmployeesWithTasks,
  getEmployeeById,
  updateEmployee,
} from "../models/employee";

import { handleError } from "../utils/errorhandler";

export const fetchEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await getAllEmployees();
    return res.status(200).json({
      code: 200,
      message: "Employees fetched successfully",
      data: employees,
    });
  } catch (error) {
    await handleError(error, res);
  }
};

export const fetchEmployeesWithTasks = async (req: Request, res: Response) => {
  try {
    const employees = await getAllEmployeesWithTasks();

    return res.status(200).json({
      code: 200,
      message: "Employees fetched successfully",
      data: employees,
    });
  } catch (error) {
    await handleError(error, res);
  }
};

export const fetchEmployeeWithTasks = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await getEmployeeById(id);
    return res.status(200).json({
      code: 200,
      message: employee
        ? "Employee fetched successfully"
        : "Employee not found",
      data: employee,
    });
  } catch (error) {
    await handleError(error, res);
  }
};

export const newEmployee = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new Error("Name is required");
    }

    const employee = await createEmployee(name);

    return res.status(200).json({
      code: 200,
      message: employee
        ? "Employee created successfully"
        : "Employee not created",
      data: employee,
    });
  } catch (error) {
    await handleError(error, res);
  }
};

export const editEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const employee = await updateEmployee(id, name);
    return res.status(200).json({
      code: 200,
      message: employee
        ? "Employee updated successfully"
        : "Employee not updated",
      data: employee,
    });
  } catch (error) {
    await handleError(error, res);
  }
};

export const removeEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await deleteEmployee(id);
    return res.status(200).json({
      code: 200,
      message: employee
        ? "Employee deleted successfully"
        : "Employee not deleted",
      data: employee,
    });
  } catch (error) {
    await handleError(error, res);
  }
};
