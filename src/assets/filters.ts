const Priority = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type PriorityType = keyof typeof Priority;

const Category = {
  work: "Work",
  lessons: "lessons",
  hobby: "hobby",
} as const;

export type CategoryType = keyof typeof Category;

const Status = {
  backlog: "backlog",
  todo: "todo",
  inProgress: "inProgress",
  testing: "testing",
  completed: "Completed",
} as const;

export type StatusType = keyof typeof Status;

export { Category, Priority, Status };
