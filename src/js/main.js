`use strict`;

const createButton = document.querySelector(`.create-button`),
  closeButtonTask = document.querySelector(`.tasks-form-close`),
  createBlock = document.querySelector(`.create-block`),
  dateField = document.querySelector(`#task-time`),
  submitTaskButton = document.querySelector(`.tasks-form-submit`),
  list = document.querySelector(`.tasks-list`),
  cancelTaskButton = document.querySelector(`.tasks-form-cancel`),
  expandButton = document.querySelector(`.top-expand`),
  storageTasks = new StorageManager(`tasks`, []);
  
  update({
    tasksList: list,
  });

createButton.addEventListener(`click`, onHideBlockClick(createBlock, false));

dateField.min = getTodayTimeString();
dateField.addEventListener(`input`, onToggleDateLabelInput);

closeButtonTask.addEventListener(`click`, onHideBlockClick(createBlock, true));

document.forms.createTaskForm.addEventListener(`submit`, onSetTaskFormSubmit);

cancelTaskButton.addEventListener(`click`, onHideBlockClick(createBlock, true));

expandButton.addEventListener(`click`, onToggleListBtnClick);