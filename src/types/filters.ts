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

export { Category, Priority };
