import { useState } from "react";
import { AddTodo } from "../Redux/todoSlice";
import { useDispatch } from "react-redux";

const Add = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();
    dispatch(
      AddTodo({
        id: Math.random(),
        task: newTask,
        isDone: false,
      })
    );
    setNewTask("");
  };

  return (
    <div>
      <form onSubmit={addTaskHandler}>
        <input
          value={newTask}
          type="text"
          name="newTask"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;
