import type { StatusType } from "./filters";

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: StatusType;
  priority: string;
  category: string;
  order: number;
}
