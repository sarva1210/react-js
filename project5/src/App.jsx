import { useEffect, useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import Filters from "./Components/Filters";

const App =()=>{
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect (()=>{
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos){
      setTodos(savedTodos);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) =>{
    setTodos( todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ));
  };

  const editTodo = (id, newText) => {
    setTodos( todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo ));
  };

   const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter(todo => todo.completed).length;

  return (

    <div className="app" >
      <h1>Task Manager</h1>
      <p className="stats" > {completedCount} / {todos.length} task completed</p>

      <TodoInput addTodo={addTodo}/>
      <Filters filter={filter} setFilter={setFilter}/>

      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
    </div>
  );
};

export default App;