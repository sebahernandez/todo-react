import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";

const initialStatesTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStatesTodos);


  useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // añadir un todo
  const addTodo = (todo) => {
    console.log("este es un todo >>>" + todo);
    setTodos([...todos, todo]);
  };
  // borrar todo
  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  // actualizar todo
  const updateTodo = (id) => {
    const newArray = todos.map((todo) => ({
      ...todo,
      state: todo.id === id ? !todo.state : todo.state,
    }));

    setTodos(newArray);
  };

  const orderTodo = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1;
      if (!a.priority) return 1;
    });
  };

  return (
    <div className="container">
      <h2 className="my-5">Formulario</h2>
      <Form addTodo={addTodo} />
      <Todos 
        todos={orderTodo(todos)} 
        deletetodo={deleteTodo} 
        updatetodo={updateTodo} 
      />
    </div>
  );
};

export default App;
