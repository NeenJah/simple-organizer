(function() {

  window.getNodeIndex = function(node) {
    return Array.from(node.parentNode.children).indexOf(node);
  }

})();