import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./taskForm";

import "../style-sheet/TaskList.css"

function TaskList (){

  const [tasks, setTasks] = useState([]);

  const agregarTask = (task) => {
    console.log('Tarea agregada')
    console.log(task)
  }

  return(
    <>
      <TaskForm />
      <div className="task-list-container">
        {
          tasks.map((task) =>
            <Task
              texto={task.texto}
              completada={task.completada}
            
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;