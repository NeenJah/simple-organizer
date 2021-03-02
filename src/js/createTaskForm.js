`use strict`;

(function() {

  window.createTaskForm = function() {
  const taskForm = document.createElement(`form`);
  const perfButton = document.createElement(`button`);
  const missButton = document.createElement(`button`);
  const delButton = document.createElement(`button`);
  
  delButton.className = `del`;
  missButton.className = `miss`;
  perfButton.className = `perf`;
  taskForm.className = `task-form`;

  taskForm.append(perfButton, missButton, delButton);
  taskForm.addEventListener(`click`, onEditTaskBtnClick);
  
  return taskForm;
  }

})();