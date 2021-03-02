(function() {
  const TITLE_SELECTOR = `.task__title`;
  const TIME_SELECTOR = `.task__time`;
  const DESC_SELECTOR = `.task__desc`;
  const BTNS_SELECTOR = `.task__btns`;
  
  function onEditTaskBtnClick(e) {
    e.preventDefault();
    const target = e.target;
    const itemIndex = getNodeIndex(target.closest(`li`));
    const tasksArr = storageTasks.entries;
    
    switch(target.className) {
  
    case `perf`:
      tasksArr[itemIndex].status = `perf-task`;
      storageTasks.entries = tasksArr;
  
      target.closest(`li`).classList.add(`perf-task`);
      target.nextElementSibling.remove();//disabled = true;
      target.remove();//disabled = true;
    break;
  
    case `miss`:
      tasksArr[itemIndex].status = `miss-task`;
      storageTasks.entries = tasksArr;
      
      target.closest(`li`).classList.add(`miss-task`);
      target.previousElementSibling.remove();//disabled = true;
      target.remove();//disabled = true;
    break;
  
    case `del`:
      tasksArr.splice(itemIndex, 1);
      storageTasks.entries = tasksArr;
      
      target.closest(`li`).remove();
    break;
    }
  }
  
window.createTaskInfo = function({h3, time, p}) {
    
    const tempEl = document.querySelector(`#js-task-item`).cloneNode(true);
    const fragment = new DocumentFragment();
    fragment.append(tempEl.content);
    
    fragment.querySelector(TITLE_SELECTOR).textContent = h3;
    fragment.querySelector(TIME_SELECTOR).textContent = time;
    fragment.querySelector(DESC_SELECTOR).textContent = p;
    fragment.querySelector(BTNS_SELECTOR).addEventListener(`click`, onEditTaskBtnClick);
    
    return fragment;
  }
  
window.createTaskDoneInfo = function({h3, time, p}) {
    
    const tempEl = document.querySelector(`#js-done-task-item`).cloneNode(true);
    const fragment = new DocumentFragment();
    fragment.append(tempEl.content);
    
    fragment.querySelector(TITLE_SELECTOR).textContent = h3;
    fragment.querySelector(TIME_SELECTOR).textContent = time;
    fragment.querySelector(DESC_SELECTOR).textContent = p;
    fragment.querySelector(BTNS_SELECTOR).addEventListener(`click`, onEditTaskBtnClick);
    
    return fragment;
  }

})();