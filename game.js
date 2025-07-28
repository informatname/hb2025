document.addEventListener("DOMContentLoaded",
  start
)


function start() {
  const MenuSize = 123// Временно

  let canvas = document.getElementById('upScreen');
  if (canvas && canvas.getContext) {
    let id = document.getElementsByClassName(`main`)[0];
    let p = id.getBoundingClientRect();

    //canvas.width = window.innerWidth * 0.8 - MenuSize;
    //canvas.height = window.innerHeight * 0.6;
    canvas.width = p.width * 0.9 - MenuSize;
    canvas.height = p.height * 0.6;

    var ctx = canvas.getContext('2d');

    var pic = new Image();
    pic.src = "images/back.jpg";


  pic.onload = function () {
    for (var i = 0; i <= canvas.width; i+=200) {
      for (var j = 0; j <= canvas.height; j+=200) {
        ctx.drawImage(pic, i, j, 200, 200);
      }
    }
  };
  

  //  ctx.putImageData(pic, 0, 0);

  }
  
  //canvas.onmousemove="EraserMove(event)"
  canvas.addEventListener("click", (event) => EraserMove(event));
}

function Erase(X,Y){

let canvas = document.getElementById('upScreen');
  
  if (canvas && canvas.getContext){
  	let ctx = canvas.getContext('2d');
    let p = canvas.getBoundingClientRect();
     ctx.clearRect(X-p.left-5, Y-p.top-5, 10, 10);
     console.log("Erase: ",X,Y,  p.left, p.top);
  }
  
}

function EraserMove(E){
 	 Erase(E.clientX,E.clientY);
	 //EraserShow(E.clientX,E.clientY);
}

