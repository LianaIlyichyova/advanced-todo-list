import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  type DragOverEvent,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import Column from "./Column";
import { BoardWrapper } from "./Board.styles";
import TodoCard from "./TodoCard";
import type { Todo, TodoStatus } from "@shared-types/todo";

import { useSelector, useDispatch } from "react-redux";
import { setTodos as setTodosAction } from "@store/todosSlice";
import type { RootState } from "@store/index";
import { Card } from "antd";

const columns: { key: TodoStatus; title: string; color: string }[] = [
  { key: "todo", title: "Todo", color: "#6A5ACD" },
  { key: "inProgress", title: "In Progress", color: "#FFA500" },
  { key: "completed", title: "Completed", color: "#32CD32" },
];

const Board = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const [activeTodo, setActiveTodo] = useState<Todo | null>(null);
  const [overId, setOverId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const activeId = String(event.active.id);
    const currentTodo = todos.find((t) => t.id === activeId);
    if (currentTodo) setActiveTodo(currentTodo);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const overId = event.over?.id ? String(event.over.id) : null;
    setOverId(overId);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTodo(null);
    setOverId(null);

    if (!over || active.id === over.id) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    const activeTodo = todos.find((t) => t.id === activeId);
    if (!activeTodo) return;

    const isDroppingOnColumn = columns.some((col) => col.key === overId);

    let newTodos: Todo[] = [];

    if (isDroppingOnColumn) {
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

    const tasksInColumn = todos
      .filter((t) => t.status === activeTodo.status)
      .sort((a, b) => a.order - b.order);

    const oldIndex = tasksInColumn.findIndex((t) => t.id === activeId);
    const newIndex = tasksInColumn.findIndex((t) => t.id === overId);

    if (oldIndex === newIndex) return;

    const newTasksInColumn = [...tasksInColumn];
    const [movedTask] = newTasksInColumn.splice(oldIndex, 1);
    newTasksInColumn.splice(newIndex, 0, movedTask);

    const updatedTasksInColumn = newTasksInColumn.map((t, idx) => ({
      ...t,
      order: idx,
    }));

    const otherTasks = todos.filter((t) => t.status !== activeTodo.status);
    newTodos = [...otherTasks, ...updatedTasksInColumn];
    dispatch(setTodosAction(newTodos));
  };

  return (
    <Card style={{ minHeight: "75vh" }}>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
      >
        <BoardWrapper>
          {columns.map(({ key, title, color }) => (
            <Column
              key={key}
              columnId={key}
              title={title}
              color={color}
              todos={todos.filter((todo) => todo.status === key)}
              overId={overId}
            />
          ))}
        </BoardWrapper>

        <DragOverlay>
          {activeTodo ? <TodoCard todo={activeTodo} isDragOverlay /> : null}
        </DragOverlay>
      </DndContext>
    </Card>
  );
};

export default Board;
