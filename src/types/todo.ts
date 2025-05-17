export type TodoStatus = "inProgress" | "todo" | "completed";

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  priority?: string;
  category?: string;
}
