import { useSelector } from "react-redux";
import TodoList from "./Components/todoList";
import Add from "./Components/Add";

const App = () => {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div>
      <Add />
      <br />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
