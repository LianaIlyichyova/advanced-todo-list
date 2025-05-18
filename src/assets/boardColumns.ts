import { statusColors } from "./colors";

import { type TodoStatus } from "@shared-types/todo";

export const boardColumns: { key: TodoStatus; title: string; color: string }[] =
  [
    { key: "backlog", title: "Backlog", color: statusColors["backlog"] },

    { key: "todo", title: "Todo", color: statusColors["todo"] },
    {
      key: "inProgress",
      title: "In Progress",
      color: statusColors["inProgress"],
    },
    { key: "testing", title: "Testing", color: statusColors["testing"] },
    { key: "completed", title: "Completed", color: statusColors["completed"] },
  ];
