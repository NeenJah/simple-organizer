`use strict`;

(function() {

  window.onHideBlockClick = function(block, hide) {
  
    return function(e) {
      e.preventDefault();
      block.hidden = hide;
    }
    
  };

})();