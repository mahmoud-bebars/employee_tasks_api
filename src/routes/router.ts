// router files imports
import taskRouter from "./Task.route";
import employeeRouter from "./Employee.route";

export const routes = [
  { prefix: "tasks", router: taskRouter },
  { prefix: "employees", router: employeeRouter },
];
