import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./taskForm";

import "../style-sheet/TaskList.css"
import Tarea from "./Task";

function TaskList (){

  const [tasks, setTasks] = useState([]);

  const agregarTask = (task) => {
    if (task.texto.trim()) {
      task.texto = task.texto.trim();
      const updateTask = [task, ...tasks];
      setTasks(updateTask); 
    }
  }

  const deleteTask = (id) => {
    const updateTask = tasks.filter(task => task.id !== id);
    setTasks(updateTask);
  }

  const taskCompleted = (id) => {
    const updateTask = tasks.map(tasks => {
      if (tasks.id == id) {
        tasks.completada = !tasks.completada;
      }
      return tasks;
    });
    setTasks(updateTask)
  }

  return(
    <>
      <TaskForm onSubmit={agregarTask} kk/>
      <div className="task-list-container">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              texto={task.texto}
              completada={task.completada}
              deleteTask={deleteTask}
              taskCompleted ={taskCompleted}
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;