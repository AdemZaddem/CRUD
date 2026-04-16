import React, { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import { fetchTodos, deleteTodo, updateTodo } from "../services/app.js";

function ListTasks() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  const handleDelete = async (id) => {
    await deleteTodo(id)
    setTodos(todos.filter(task=> task.id !== id))
  };

  const handleToggle = async (id, currentValue) => {
    updateTodo(id,{isDone: !currentValue})
    setTodos(todos.map(task=> task.id === id ?{...task,isDone:!currentValue}:task))
  };

  const handleEdit = async (id,newValue) =>{
    updateTodo(id,newValue)
    setTodos(prev =>
    prev.map(task =>
      task.id === id ? { ...task, ...newValue } : task
    )
  )
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-center text-2xl font-bold">List Of tasks</h1>
      <div className="flex flex-col gap-4">
        {/* All tasks goes here later */}
        {todos.map((task) => (
          <TaskItem key={task.id} {...task} onDelete = {handleDelete} onToggle = {handleToggle} onEdit = {handleEdit}/>
        ))}
      </div>
    </div>
  );
}

export default ListTasks;
