import { useSelector } from "react-redux";
import type { RootState } from "@store/index";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import type { Todo } from "@shared-types/todo";

import Card from "../Card";

import {
  StyledColumnWrapper,
  StyledColumnHeader,
  StyledHeaderContent,
  StyledCountCircle,
  StyledTitleText,
  StyledColumnContent,
} from "./Column.styles";

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
    <StyledColumnWrapper ref={setNodeRef}>
      <StyledColumnHeader>
        <StyledHeaderContent $color={color}>
          <StyledCountCircle>{sortedTodos.length}</StyledCountCircle>
          <StyledTitleText fontSize="md" fontWeight="600" color={"extend"}>
            {title}
          </StyledTitleText>
        </StyledHeaderContent>
      </StyledColumnHeader>
      <SortableContext
        items={sortedTodos.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <StyledColumnContent>
          {sortedTodos.map((todo) => (
            <Card key={todo.id} todo={todo} isOver={todo.id === overId} />
          ))}
        </StyledColumnContent>
        {sortedTodos.length === 0 && <div></div>}
      </SortableContext>
    </StyledColumnWrapper>
  );
};

export default Column;
