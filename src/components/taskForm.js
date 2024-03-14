import React from "react";
import '../style-sheet/TaskForm.css'

function TaskForm (props){
  return (
    <form className="task-form">
      <input
        className="task-input"
        type="text"
        placeholder="Agrega una tarea"
        name="text"
      />
      <button className="task-button">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TaskForm;