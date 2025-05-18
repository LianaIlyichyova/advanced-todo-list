import { statusColors } from "./colors";

import { type TodoStatus } from "@shared-types/todo";

export const boardColumns: { key: TodoStatus; title: string; color: string }[] =
  [
    { key: "todo", title: "Todo", color: statusColors["todo"] },
    {
      key: "inProgress",
      title: "In Progress",
      color: statusColors["inProgress"],
    },
    { key: "completed", title: "Completed", color: statusColors["completed"] },
  ];
