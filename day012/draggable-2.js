// Using Draggable - Events
// Using layerX, offsetX, pageX



var dragndrop = (function(){
  var myX;
  var myY;
  var item = '';
  
  function moveStart(e){
    item = e.target;
    myX = e.offsetX === undefined ? e.layerX : e.offsetX;
    myY = e.offsetY === undefined ? e.layerY : e.offsetY;
    item.style.zIndex = 10;
  }
  function moveDragOver(e){
    e.preventDefault();
   }
  
  function moveDrop(e){
    //e.preventDefault();
    item.style.left = e.pageX - myX + 'px';
    item.style.top = e.pageY - myY + 'px';
    item.style.zIndex = 0;
  }
  
  document.body.addEventListener('dragstart', moveStart);
  document.body.addEventListener('dragover', moveDragOver);
 document.body.addEventListener('drop', moveDrop);
})();