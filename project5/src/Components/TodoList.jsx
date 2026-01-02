import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
  if (todos.length === 0) {
    return <p className="empty">No tasks found ✨</p>;
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
