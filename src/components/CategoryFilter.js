import React from "react";

function CategoryFilter({category, selectedCategory, setSelectedCategory ,deleteTask,setDeleteTask}) {

  function handleCategoryClick(category) { 
    setSelectedCategory(category);   
    
  }


  function handleFilter(category){
    if(category === "All"){
      setDeleteTask(deleteTask);
    }else{
      const newTasks = deleteTask.filter((task) => task.category === category);
      setDeleteTask(newTasks);
    }
  }

  const setClass = (category) => {
    if (category === selectedCategory) {
      return "selected";
    } else {
      return "";
    }
  };
  const categories = category.map((category) => {

    return(
      <button key={category} className={setClass(category)} onClick={()=>handleCategoryClick(category) }>{category}</button>
    )
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories}
    </div>
  );
}

export default CategoryFilter;
