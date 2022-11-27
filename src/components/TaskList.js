import React from "react";

import Task from "./Task";

function TaskList({ tasks,deleteTask, setDeleteTask}) {

  function handleDelete(id){
    const newTasks = deleteTask.filter((task) => task.text !== id);
    setDeleteTask(newTasks);
    
  }
 
  const items = deleteTask.map((task) => {
    return(
      <Task key={task.text} text={task.text} category={task.category} onClick={()=>handleDelete(task.text)}  />
    )
  });
  return (
    <div className="tasks">
      {items}
    </div>
  );
}

export default TaskList;
