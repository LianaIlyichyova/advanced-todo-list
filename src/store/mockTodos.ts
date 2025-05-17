import type { Todo } from "@shared-types/todo";

const todos: Todo[] = [
  {
    id: "1",
    title: "UI/UX Design in the age of AI",
    description: "Lorem ipsum dolor sit amet...",
    status: "inProgress",
    category: "work",
    priority: "medium",
    order: 1,
  },
  {
    id: "2",
    title:
      "Responsive Website Design for 23 clients Responsive Website Design for 23 clients",
    description: "Lorem ipsum dolor sit amet...",
    status: "inProgress",
    category: "lessons",
    priority: "high",
    order: 2,
  },
  {
    id: "3",
    title: "User flow confirmation",
    description:
      "Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...",
    status: "todo",
    category: "work",
    priority: "low",
    order: 3,
  },
  {
    id: "4",
    title: "UI/UX Design completed",
    description:
      "Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...",
    status: "completed",
    category: "hobby",
    priority: "medium",
    order: 4,
  },
];

export default todos;
