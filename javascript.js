var bird;

  var positionX = 0;
  var positionY = 0;
  

function startanimation() {
   bird = document.getElementById("Flyingbird");   
    setInterval(update, 20);
}



 function update() {
  positionX += 1;
  if (positionX >100){
     return positionX = -20 
  } 



  

  
  
  bird.style.left = positionX + "%";
  
}
 
