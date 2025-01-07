/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteTodo, finishTodo } from "../Redux/todoSlice";
import { MdDone } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import UpdateTodo from "./UpdateTodo";

const Todo = ({ todoEl }) => {
  const dispatch = useDispatch();

  const completeHandler = () => {
    dispatch(finishTodo(todoEl.id));
  };
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {show ? (
        <UpdateTodo todoEl={todoEl} setShow={setShow} show={show} />
      ) : (
        <p style={todoEl.isDone ? { color: "green" } : { color: "red" }}>
          {todoEl.task}
        </p>
      )}
      {!show && todoEl.isDone === true && (
        <MdOutlineCancel
          style={{ cursor: "pointer" }}
          onClick={completeHandler}
        />
      )}
      {!show && todoEl.isDone === false && (
        <MdDone style={{ cursor: "pointer" }} onClick={completeHandler} />
      )}
      {!show && (
        <CiEdit
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShow(!show);
          }}
        />
      )}

      {!show && (
        <MdDelete
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(deleteTodo(todoEl.id));
          }}
        />
      )}
    </div>
  );
};

export default Todo;
