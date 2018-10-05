var bird;

  var positionX = 0;
  var positionY = 0;

function startanimation() {
   bird = document.getElementById("Flyingbird");   
    setInterval(update, 20);
}

function update() {
   bird.style.left = positionX + "%";
   positionX += 1;
 if (bird )  
}
 