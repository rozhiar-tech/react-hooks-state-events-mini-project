import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [deleteTask, setDeleteTask] = React.useState(TASKS);


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} deleteTask={deleteTask} setDeleteTask={setDeleteTask}/>
      <NewTaskForm />
      <TaskList tasks={TASKS} deleteTask={deleteTask} setDeleteTask={setDeleteTask}/>
    </div>
  );
}

export default App;
