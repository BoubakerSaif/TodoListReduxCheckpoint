import { useState } from "react";
import { updateMyTodo } from "../Redux/todoSlice";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
const UpdateTodo = ({ todoEl, setShow, show }) => {
  const dispatch = useDispatch();
  const [updatedTask, setUpdatedTask] = useState(todoEl.task);

  const updateTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updateMyTodo({ id: todoEl.id, task: updatedTask }));
    setShow(!show);
  };

  return (
    <div>
      <form onSubmit={updateTodoHandler}>
        <input
          defaultValue={todoEl.task}
          type="text"
          onChange={(e) => {
            setUpdatedTask(e.target.value);
          }}
        />
        <button type="submit">Confirm Update</button>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Cancel Edit
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
