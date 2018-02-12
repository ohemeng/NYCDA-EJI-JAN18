// Using Draggable - Events

var box1 = document.getElementById("box1");

var dragndrop = (function(){
  var myX;
  var myY = '';
  var whichBox = '';
  
  function moveStart(e){
    whichArt = e.target;
    myX = e.offsetX === undefined ? e.layerX : e.offsetX;
    myY = e.offsetY === undefined ? e.layerY : e.offsetY;
    whichArt.style.zIndex = 10;
  }
  function moveDragOver(e){
     e.preventDefault();
   }
  
  function moveDrop(e){
    e.preventDefault();
    whichArt.style.left = e.pageX - myX + 'px';
    whichArt.style.top = e.pageY - myY + 'px';
    whichArt.style.zIndex = 0;
  }
  
  document.body.addEventListener('dragstart', moveStart);
  document.body.addEventListener('dragover', moveDragOver);
 document.body.addEventListener('drop', moveDrop);
})();