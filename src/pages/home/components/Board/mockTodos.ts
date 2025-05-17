import type { Todo } from "@shared-types/todo";

export const todos: Todo[] = [
  {
    id: "1",
    title: "UI/UX Design in the age of AI",
    description: "Lorem ipsum dolor sit amet...",
    status: "inProgress",
    category: "work",
    priority: "medium",
  },
  {
    id: "2",
    title: "Responsive Website Design for 23 clients",
    description: "Lorem ipsum dolor sit amet...",
    status: "inProgress",
    category: "lessons",
    priority: "high",
  },
  {
    id: "3",
    title: "User flow confirmation",
    description:
      "Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...",
    status: "todo",
    category: "work",
    priority: "low",
  },
  {
    id: "4",
    title: "UI/UX Design completed",
    description:
      "Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...",
    status: "completed",
    category: "hobby",
    priority: "medium",
  },
];
