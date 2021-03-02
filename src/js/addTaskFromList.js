(function() {

window.addTaskFromList = function(list, content) {
    const taskItemEl = document.createElement(`li`);
    
    switch(content.status) {
      case `perf-task`:
        taskItemEl.classList.add(`perf-task`);
        taskItemEl.append(createTaskDoneInfo(content));
        list.append(taskItemEl);
      return;
      
      case `miss-task`:
      taskItemEl.classList.add(`miss-task`);
      taskItemEl.append(createTaskDoneInfo(content));
      list.append(taskItemEl);
      return;
    }
    
    taskItemEl.append(createTaskInfo(content));
    list.append(taskItemEl);
  }
  
})();