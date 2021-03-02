`use strict`;

(function() {

  window.appendBlock = function(parentBlock, block, content, ...other) {
    const contentEntries = Object.entries(content);
    const added = document.createElement(block);
    const wrapper = document.createElement(`div`);
    let childBlock;
    
    for(elem of contentEntries) {
      childBlock = document.createElement(elem[0]);
      childBlock.textContent = elem[1];
      wrapper.append(childBlock);
    }
    
    added.append(wrapper);
    if(other.length) {
      other.forEach((el) => added.append(el));
    }
    
    parentBlock.append(added);
  };

})();