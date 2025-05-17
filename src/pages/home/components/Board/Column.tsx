import {
  ColumnWrapper,
  ColumnHeader,
  HeaderContent,
  CountCircle,
  TitleText,
} from "./Board.styles";
import type { Todo } from "@shared-types/todo";
import TodoCard from "./TodoCard";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

import { useSelector } from "react-redux";
import type { RootState } from "@store/index";

interface Props {
  title: string;
  color: string;
  todos: Todo[];
  columnId: string;
  overId: string | null;
}

const Column: React.FC<Props> = ({ title, color, todos, columnId, overId }) => {
  const { setNodeRef } = useDroppable({ id: columnId });

  const { priority, category } = useSelector(
    (state: RootState) => state.filters
  );

  const filteredTodos = todos.filter((todo) => {
    const matchPriority =
      priority.length === 0 || priority.includes(todo.priority ?? "");
    const matchCategory =
      category.length === 0 || category.includes(todo.category ?? "");
    return matchPriority && matchCategory;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => a.order - b.order);

  return (
    <ColumnWrapper ref={setNodeRef}>
      <ColumnHeader>
        <HeaderContent $color={color}>
          <CountCircle>{sortedTodos.length}</CountCircle>
          <TitleText fontSize="md" fontWeight="600" color={"extend"}>
            {title}
          </TitleText>
        </HeaderContent>
      </ColumnHeader>

      <SortableContext
        items={sortedTodos.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        {sortedTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} isOver={todo.id === overId} />
        ))}
        {sortedTodos.length === 0 && <div></div>}
      </SortableContext>
    </ColumnWrapper>
  );
};

export default Column;
