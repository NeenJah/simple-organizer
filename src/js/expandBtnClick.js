(function() {

window.onToggleListBtnClick = function() {
  if(list.children.length) {
    list.classList.toggle(`tasks-list-hide`);
    expandButton.classList.toggle(`top-expand-on`);
  }
}

})();