function updateClock(){
    var now = new Date();
    var hou = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    
    
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
  }
  
function initClock()
{
    updateClock();
    window.setInterval("updateClock()", 1);
}