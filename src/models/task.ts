// src  /models/task.ts
import prisma from "../db/prisma";

// task model

// get all tasks
export const getAllTasks = async () => {
  return await prisma.task.findMany({
    select: {
      id: true,
      description: true,
      isCompleted: true,
      from: true,
      to: true,
      employee: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

// get task by id
export const getTaskById = async (id: string) => {
  return await prisma.task.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      description: true,
      isCompleted: true,
      from: true,
      to: true,
      employee: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

// get Employee Tasks
export const getEmployeeTasks = async (employeeId: string) => {
  const tasks = await prisma.task.findMany({
    where: {
      employeeId: employeeId,
    },
    select: {
      id: true,
      description: true,
      isCompleted: true,
      from: true,
      to: true,
    },
  });
  console.log(tasks);
  return tasks;
};

// create task
export const createTask = async (
  description: string,
  from: Date,
  to: Date,
  employeeId: string,
) => {
  return await prisma.task.create({
    data: {
      description: description,
      from: from,
      to: to,
      employeeId: employeeId,
    },
  });
};

// update task
export const updateTask = async (
  id: string,
  description: string,
  from: Date,
  to: Date,
  employeeId: string,
) => {
  return await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      description: description,
      from: from,
      to: to,
      employeeId: employeeId,
    },
  });
};

// delete task
export const deleteTask = async (id: string) => {
  return await prisma.task.delete({
    where: {
      id: id,
    },
  });
};
