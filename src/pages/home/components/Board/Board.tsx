import { todos } from "./mockTodos";
import Column from "./Column";
import { BoardWrapper } from "./Board.styles";

const columns = [
  { key: "todo", title: "Todo", color: "#6A5ACD" },
  { key: "inProgress", title: "In Progress", color: "#FFA500" },
  { key: "completed", title: "Completed", color: "#32CD32" },
];

const Board = () => {
  return (
    <BoardWrapper>
      {columns.map(({ key, title, color }) => (
        <Column
          key={key}
          title={title}
          color={color}
          todos={todos.filter((task) => task.status === key)}
        />
      ))}
    </BoardWrapper>
  );
};

export default Board;
