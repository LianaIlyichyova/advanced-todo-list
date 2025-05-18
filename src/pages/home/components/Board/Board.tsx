import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@store/index";

import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import {
  handleDragStart,
  handleDragOver,
  handleDragEnd,
} from "@helpers/dragAndDrpHandlers";

import { boardColumns } from "@assets/boardColumns";

import { StyledBoardWrapper, StyledCard } from "./Board.styles";
import { Card, Column } from "./components";

import type { Todo } from "@shared-types/todo";

const Board = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const [activeTodo, setActiveTodo] = useState<Todo | null>(null);
  const [overId, setOverId] = useState<string | null>(null);

  // 🖱️ Setup DnD sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      // need to move 5px before drag starts, because it blocked other events on the card
      activationConstraint: { distance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates, // for keyboard drag support
    })
  );

  return (
    <StyledCard>
      <DndContext
        sensors={sensors}
        //  When drag starts → remember dragged todo
        onDragStart={(e) => handleDragStart(e, todos, setActiveTodo)}
        onDragOver={(e) => handleDragOver(e, setOverId)}
        onDragEnd={(e) =>
          handleDragEnd(e, todos, dispatch, setActiveTodo, setOverId)
        }
      >
        <StyledBoardWrapper>
          {boardColumns.map(({ key, title, color }) => (
            <Column
              key={key}
              columnId={key}
              title={title}
              color={color}
              todos={todos.filter((todo) => todo.status === key)}
              overId={overId} // help column show placeholder on hover
            />
          ))}
        </StyledBoardWrapper>

        {/*  Floating todo card while dragging */}
        <DragOverlay>
          {activeTodo ? <Card todo={activeTodo} isDragOverlay /> : null}
        </DragOverlay>
      </DndContext>
    </StyledCard>
  );
};

export default Board;
