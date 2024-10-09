// src/models/employee.ts
import prisma from "../db/prisma";

// employee model

// get all employees
export const getAllEmployees = async () => {
  return await prisma.employee.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

// get all employees with tasks
export const getAllEmployeesWithTasks = async () => {
  return await prisma.employee.findMany({
    select: {
      id: true,
      name: true,
      tasks: {
        select: {
          id: true,
          description: true,
          isCompleted: true,
          from: true,
          to: true,
        },
      },
    },
  });
};
// check if employee exists
export const checkEmployeeExists = async (id: string) => {
  const employee = await prisma.employee.findUnique({
    where: {
      id: id,
    },
  });
  return employee ? true : false;
};
// get employee with tasks by id
export const getEmployeeById = async (id: string) => {
  return await prisma.employee.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      tasks: {
        select: {
          id: true,
          description: true,
          isCompleted: true,
          from: true,
          to: true,
        },
      },
    },
  });
};
// create employee
export const createEmployee = async (name: string) => {
  return await prisma.employee.create({
    data: {
      name: name,
    },
  });
};

// update employee
export const updateEmployee = async (id: string, name: string) => {
  return await prisma.employee.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
};

// delete employee with all tasks
export const deleteEmployee = async (id: string) => {
  return await prisma.employee.delete({
    where: {
      id: id,
    },
  });
};
