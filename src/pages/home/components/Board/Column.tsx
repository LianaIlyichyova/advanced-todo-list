import React from "react";
import {
  ColumnWrapper,
  ColumnHeader,
  HeaderContent,
  CountCircle,
  TitleText,
} from "./Board.styles";
import type { Todo } from "@shared-types/todo";
import TodoCard from "./TodoCard";

interface Props {
  title: string;
  color: string;
  todos: Todo[];
}

const Column: React.FC<Props> = ({ title, color, todos }) => {
  return (
    <ColumnWrapper>
      <ColumnHeader>
        <HeaderContent $color={color}>
          <CountCircle>{todos.length}</CountCircle>
          <TitleText fontSize="md" fontWeight="600" color={"extend"}>
            {title}
          </TitleText>
        </HeaderContent>
      </ColumnHeader>

      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </ColumnWrapper>
  );
};

export default Column;
