import { useSelector } from "react-redux";
import TodoList from "./Components/todoList";
import Add from "./Components/Add";
import FilterTodos from "./Components/FilterTodos";
import { useState } from "react";

const App = () => {
  const { todos } = useSelector((state) => state.todo);

  const [filter, setFilter] = useState("ALL");

  return (
    <div>
      <Add />
      <br />
      <FilterTodos setFilter={setFilter} />
      <br />
      <TodoList
        todos={
          filter === "DONE"
            ? todos.filter((el) => el.isDone === true)
            : filter === "UNDONE"
            ? todos.filter((el) => el.isDone === false)
            : todos
        }
      />
    </div>
  );
};

export default App;
