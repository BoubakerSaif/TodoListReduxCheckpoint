/* eslint-disable react/prop-types */
const FilterTodos = ({ setFilter }) => {
  return (
    <div>
      <button
        onClick={() => {
          setFilter("ALL");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter("DONE");
        }}
      >
        Done
      </button>
      <button
        onClick={() => {
          setFilter("UNDONE");
        }}
      >
        Undone
      </button>
    </div>
  );
};

export default FilterTodos;
