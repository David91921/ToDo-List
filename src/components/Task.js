import React from "react";
import '../style-sheet/Task.css';
import { AiTwotoneDelete } from "react-icons/ai";

function Tarea ({ id, texto, completada, completarTask, eliminarTask  }) {
  return(
    <div className={completada ? 'task-container completed' : 'task-container'}>
      <div 
        className="text-task"
        onClick={() => completarTask(id)}>
        {texto}
      </div>
      <div 
        className="container-icons-task"
        onClick={()=> eliminarTask(id)}>
        <AiTwotoneDelete className="icon-task"/>
      </div>
    </div>
  );
}

export default Tarea;