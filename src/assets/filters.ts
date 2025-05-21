const Priority = {
  low: "Low",
  medium: "Medium",
  high: "High",
} as const;

const Category = {
  work: "Work",
  lessons: "Lessons",
  hobby: "Hobby",
} as const;

const Status = {
  backlog: "Backlog",
  todo: "Todo",
  inProgress: "In Progress",
  testing: "Testing",
  completed: "Completed",
} as const;

export { Category, Priority, Status };
