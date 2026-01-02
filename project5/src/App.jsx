import { useState } from "react";
import TopCard from "./Components/TopCard";
import StatsCard from "./Components/StatsCard";
import AddTaskCard from "./Components/AddTaskCard";
import TodoList from "./Components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="dashboard">
      <TopCard />

      <div className="bottom-section">
        <div className="stats-row">
          <StatsCard
            title="All Tasks"
            count={todos.length}
            active={filter === "all"}
            onClick={() => setFilter("all")}
          />
          <StatsCard
            title="Active"
            count={todos.filter(t => !t.completed).length}
            active={filter === "active"}
            onClick={() => setFilter("active")}
          />
          <StatsCard
            title="Completed"
            count={todos.filter(t => t.completed).length}
            active={filter === "completed"}
            onClick={() => setFilter("completed")}
          />
        </div>

        <AddTaskCard addTodo={addTodo} />
      </div>

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
