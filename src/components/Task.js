import React from "react";
import '../style-sheet/Task.css';
import { AiTwotoneDelete } from "react-icons/ai";

function Tarea ({ id, texto, completada, taskCompleted, deleteTask  }) {
  return(
    <div className={completada ? 'task-container completed' : 'task-container'}>
      <div 
        className="text-task"
        onClick={() => taskCompleted(id)}>
        {texto}
      </div>
      <div 
        className="container-icons-task"
        onClick={()=> deleteTask(id)}>
        <AiTwotoneDelete className="icon-task"/>
      </div>
    </div>
  );
}

export default Tarea;