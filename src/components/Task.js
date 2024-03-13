import React from "react";
import '../style-sheet/Task.css';

function Tarea ({ texto }) {
  return(
    <div className="container-task">
      <div className="text-task">
        {texto}
      </div>
      <div className="icon-task">
        Eliminar
      </div>
    </div>
  );
}

export default Tarea;