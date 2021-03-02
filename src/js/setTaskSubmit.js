(function() {
  
  window.onSetTaskFormSubmit = function(event) {
    event.preventDefault();
    const elements = this.elements;
    const tasksStorage = storageTasks.entries;
    if(!elements.title.value) {
      if(elements.title.classList.contains(`input-error`)) return;
      elements.title.classList.add(`input-error`);
      return;
    }
    if(elements.title.classList.contains(`input-error`)) elements.title.classList.remove(`input-error`);
    
    const content = {
      h3: elements.title.value,
      time: (elements.time.value) ?
      new Date(elements.time.value).toLocaleString(`ru`, {year: `numeric`, month: `numeric`, day: `numeric`})
      : (new Date()).toLocaleString(`ru`, {year: `numeric`, month: `numeric`, day: `numeric`}),
      p: elements.description.value || `Без описания`,
    }
    
    tasksStorage.push(content);
    storageTasks.entries = tasksStorage;
    
    addTaskFromList(list, content);
    
    document.forms.createTaskForm.reset();
    this.parentNode.hidden = true;
  };

})();