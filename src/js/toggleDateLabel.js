(function() {

  window.onToggleDateLabelInput = function() {
    if(!this.value) this.classList.remove(`tasks-form-date-empt`);
    else this.classList.add(`tasks-form-date-empt`);
  }
  
})();