import { useState } from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodo, edittodo})=>{
    const [isEditing, setIsEditing] = useState(false);
    const [newText , setNewText] = useState(todo.text);

    const handleSave = () =>{
        edittodo(todo.id, newText);
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${todo.completed ? "done" : ""}`} >
            <input type="checkbox" checked ={todo.completed} onChange={()=> toggleTodo(todo.id)} />


            {isEditing ? (
                <input value={newText} onChange={(e) => setNewText(e.target.value)} />
            ):(
                <span>{todo.text}</span>
            )}


            {isEditing ? (
                <button onClick={handleSave} >✔</button>
            ):(
                <button onClick={()=> setIsEditing(true)} >✏</button>
            )}


            <button onClick={()=> deleteTodo(todo.id)} >✕</button>
        </div>
    );
};

export default TodoItem;