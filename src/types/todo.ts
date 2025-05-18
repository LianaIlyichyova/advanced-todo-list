export type TodoStatus =
  | "backlog"
  | "inProgress"
  | "todo"
  | "completed"
  | "testing";

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  priority: string;
  category: string;
  order: number;
}
