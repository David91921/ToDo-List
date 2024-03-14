import React from "react";
import '../style-sheet/Task.css';
import { AiTwotoneDelete } from "react-icons/ai";

function Tarea ({ texto, completada }) {
  return(
    <div className={completada ? 'task-container completed' : 'task-container'}>
      <div className="text-task">
        {texto}
      </div>
      <div className="container-icons-task">
        <AiTwotoneDelete className="icon-task"/>
      </div>
    </div>
  );
}

export default Tarea;