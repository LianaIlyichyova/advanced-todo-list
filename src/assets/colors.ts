import {
  type CategoryType,
  type PriorityType,
  type StatusType,
} from "@shared-types/filters";

export const priorityColors: Record<PriorityType, string> = {
  high: "#FF4D4F",
  medium: "#FAAD14",
  low: "#52C41A",
};

export const categoryColors: Record<CategoryType, string> = {
  work: "#40A9FF",
  lessons: "#9254DE",
  hobby: "#13C2C2",
};

export const statusColors: Record<StatusType, string> = {
  backlog: "#8E44AD",
  todo: "#6A5ACD",
  inProgress: "#FFA500",
  testing: "#1890FF",
  completed: "#32CD32",
};
