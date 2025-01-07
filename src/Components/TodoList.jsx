import Todo from "./todo";

const todoList = ({ todos }) => {
  return (
    <div>
      {todos.map((el) => (
        <Todo key={el.id} todoEl={el} />
      ))}
    </div>
  );
};

export default todoList;
