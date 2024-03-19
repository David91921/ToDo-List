import React, { useState } from "react";
import '../style-sheet/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

function TaskForm (props){

  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value)
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    
    const newTask = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(newTask);
  }

  return (
    <form 
      className="task-form"
      onSubmit={manejarEnvio}>
      <input
        className="task-input"
        type="text"
        placeholder="Agrega una tarea"
        name="text"
        onChange={manejarCambio}
      />
      <button className="task-button">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TaskForm;