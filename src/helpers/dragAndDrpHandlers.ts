import type {
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from "@dnd-kit/core";

import type { Todo, TodoStatus } from "@shared-types/todo";

import { boardColumns } from "@assets/boardColumns"; // columns definition

import { setTodos as setTodosAction } from "@store/todosSlice";
import type { AppDispatch } from "@store/index";

// Handles the drag start event by setting the active todo

export function handleDragStart(
  event: DragStartEvent,
  todos: Todo[],
  setActiveTodo: (todo: Todo | null) => void
) {
  const activeId = String(event.active.id);
  const currentTodo = todos.find((t) => t.id === activeId);
  if (currentTodo) setActiveTodo(currentTodo);
}

// Handles the drag over event by setting the id of the element

export function handleDragOver(
  event: DragOverEvent,
  setOverId: (id: string | null) => void
) {
  const overId = event.over?.id ? String(event.over.id) : null;
  setOverId(overId);
}

/**
 * Handles the drag end event, updating todos order and status
 * Supports dropping onto columns
 */
export function handleDragEnd(
  event: DragEndEvent,
  todos: Todo[],
  dispatch: AppDispatch,
  setActiveTodo: (todo: Todo | null) => void,
  setOverId: (id: string | null) => void
) {
  const { active, over } = event;
  setActiveTodo(null);
  setOverId(null);

  if (!over || active.id === over.id) return;

  const activeId = String(active.id);
  const overId = String(over.id);

  const activeTodo = todos.find((t) => t.id === activeId);
  if (!activeTodo) return;

  // Check if dropped on a column (status change)
  const isDroppingOnColumn = boardColumns.some((col) => col.key === overId);

  let newTodos: Todo[] = [];

  if (isDroppingOnColumn) {
    // Move todo to new status column and reorder
    const newStatus = overId as TodoStatus;
    const filtered = todos.filter((t) => t.id !== activeId);
    const tasksInColumn = filtered.filter((t) => t.status === newStatus);

    const updatedTodo = { ...activeTodo, status: newStatus };
    const updatedTasksInColumn = [...tasksInColumn, updatedTodo].map(
      (t, idx) => ({
        ...t,
        order: idx,
      })
    );

    const others = filtered.filter((t) => t.status !== newStatus);
    newTodos = [...others, ...updatedTasksInColumn];
    dispatch(setTodosAction(newTodos));
    return;
  }

  const overTodo = todos.find((t) => t.id === overId);
  if (!overTodo) return;

  if (activeTodo.status !== overTodo.status) {
    // Moving todo between different columns
    const filtered = todos.filter((t) => t.id !== activeId);
    const tasksInNewColumn = filtered.filter(
      (t) => t.status === overTodo.status
    );
    const overIndex = tasksInNewColumn.findIndex((t) => t.id === overId);
    const updatedTodo = { ...activeTodo, status: overTodo.status };

    const newTasksInNewColumn = [
      ...tasksInNewColumn.slice(0, overIndex),
      updatedTodo,
      ...tasksInNewColumn.slice(overIndex),
    ];

    const updatedTasksInNewColumn = newTasksInNewColumn.map((t, idx) => ({
      ...t,
      order: idx,
    }));

    const others = filtered.filter((t) => t.status !== overTodo.status);
    newTodos = [...others, ...updatedTasksInNewColumn];
    dispatch(setTodosAction(newTodos));
    return;
  }

  // Moving in the same column
  const todosInColumn = todos
    .filter((t) => t.status === activeTodo.status)
    .sort((a, b) => a.order - b.order);

  const oldIndex = todosInColumn.findIndex((t) => t.id === activeId);
  const newIndex = todosInColumn.findIndex((t) => t.id === overId);

  if (oldIndex === newIndex) return;

  const newTasksInColumn = [...todosInColumn];
  const [movedTask] = newTasksInColumn.splice(oldIndex, 1);
  newTasksInColumn.splice(newIndex, 0, movedTask);

  const updatedTasksInColumn = newTasksInColumn.map((t, idx) => ({
    ...t,
    order: idx,
  }));

  const otherTasks = todos.filter((t) => t.status !== activeTodo.status);
  newTodos = [...otherTasks, ...updatedTasksInColumn];
  dispatch(setTodosAction(newTodos));
}
