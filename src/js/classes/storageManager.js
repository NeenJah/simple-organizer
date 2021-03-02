(function() {
  const ORIGIN_PROP_NAME = `_origin`;
  const CLEAR_STORAGE_ATTENTION = `Все записи в local storage будут удалены! Продолжить?`;

  window.StorageManager = class {
  
    constructor(entryName, startValue) {
      this.name = entryName;
      if(!localStorage.getItem(this.name)) {
        localStorage.setItem(this.name, JSON.stringify(startValue));
      }
    }
    
    get entries() {
      return JSON.parse(localStorage.getItem(this.name));
    }
    
    set entries(value) {
      localStorage.setItem(this.name, JSON.stringify(value));
    }
    
    static clear(...props) {
      for(const prop of props) {
        localStorage.removeItem(prop);
      }
      
      if(!props.length && confirm(CLEAR_STORAGE_ATTENTION)) {
        localStorage.clear();
      }
    }
    
  }

})();