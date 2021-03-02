(function() {

  window.update = function({tasksList}) {
    if(!storageTasks.entries.length) return false;
    for(const el of storageTasks.entries) {
      addTaskFromList(tasksList, el);
    }
  }

})();