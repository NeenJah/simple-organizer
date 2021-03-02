(function() {

  const today = new Date();
  
  window.getTodayTimeString = function() {
    return `${today.getFullYear()}-${((today.getMonth() + 1) < 10) ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)}-${(today.getDate() < 10) ? '0' + today.getDate() : today.getDate()}`;
  }

})();