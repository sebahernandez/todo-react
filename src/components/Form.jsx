import React, { useState } from "react";
import Swal from "sweetalert2";

const Form = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "",
    priority:false
  });

  const {title, description, state, priority} = todo 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim() || !description.trim()){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Titulo y descripcion obligatorio !',
      })    
    }
    addTodo({
      id:Date.now(),
      ...todo,
      state: state === 'completado' 
    })

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tarea agregada correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  
  };



  const handleChange = (e) => {
    const {name, type , value, checked } = e.target
    setTodo({
      ...todo,
      [name]:type === 'checkbox' ? checked : value,
    });
    
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        value={description}
        onChange={handleChange}
      />

      <div className="form-check mb-2">
      <label htmlFor="inputCheck">Dar prioridad</label>
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
      </div>
      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar una tarea
      </button>
    </form>
  );
};

export default Form;
