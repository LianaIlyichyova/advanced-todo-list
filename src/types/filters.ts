import { Priority, Category, Status } from "@assets/filters";

export type PriorityType = keyof typeof Priority;

export type CategoryType = keyof typeof Category;

export type StatusType = keyof typeof Status;
