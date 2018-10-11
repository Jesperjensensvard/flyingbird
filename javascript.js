var bird;

  var positionX = 0;
  var positionY = 0;
  var positionxSpeed 
  var positionYSpeed

//kallar på flyingbird

function startanimation() {
    bird = document.getElementById("Flyingbird");   
    setInterval(update, 30);
}


//flying bird return on x axel plus y axel 

  function update() {
  positionX += 1;
  positionY += Math.random() -0.5 *9;
  if (positionX > 100) {
      positionX = -30; 
  }   
  
  bird.style.top = positionY + "%";    
  bird.style.left = positionX + "%";
  
} 

 //flippar bilden

function flippTheBird() {
  var element = document.getElementById("Flyingbird");

  if (element.classList) { 
      element.classList.toggle("flipped");
  } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("flipped");

      if (i >= 0) 
          classes.splice(i, 1);
      else 
          classes.push("flipped");
          element.className = classes.join(""); 
  }

}

