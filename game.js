document.addEventListener("DOMContentLoaded",
  start
)

let EraserDown=false;

function start() {
  const MenuSize = 0// Временно
  EraserDown=false;

  let canvas = document.getElementById('upScreen');
  if (canvas && canvas.getContext) {
    let id = document.getElementsByClassName(`screen`)[0];
    let p = id.getBoundingClientRect();

    //canvas.width = window.innerWidth * 0.8 - MenuSize;
    //canvas.height = window.innerHeight * 0.6;
    canvas.width = p.width * 0.99 - MenuSize;
    canvas.height = p.height * 0.99;

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
  canvas.addEventListener("mousedown", (event) => eraserStart(event));
  canvas.addEventListener("mouseup", (event) => eraserStop(event));
  canvas.addEventListener("mousemove", (event) => eraserMove(event));
}

function erase(X,Y){

let canvas = document.getElementById('upScreen');
  
  if (canvas && canvas.getContext){
  	let ctx = canvas.getContext('2d');
    let p = canvas.getBoundingClientRect();
     //ctx.clearRect(X-p.left-5, Y-p.top-5, 10, 10);
          let alpha = Math.random()*90;
          ctx.globalCompositeOperation = 'destination-out';
          ctx.beginPath();
          ctx.fillStyle = "rgba(255,255,255,0.9   )";
          ctx.lineWidth = 50/2;
          ctx.ellipse(X-p.left-5, Y-p.top-5, 10, 5, alpha, 0 , Math.PI*2, true);
          ctx.fill();
          ctx.closePath();
          ctx.globalCompositeOperation = "source-over";

     console.log("Erase: ",X,Y,  p.left, p.top);
  }
  
}

function eraserStart(E){
 	 erase(E.clientX,E.clientY);
	 EraserDown=true;
}
function eraserMove(E){
  if( EraserDown )
 	   erase(E.clientX,E.clientY);
}
function eraserStop(){
	 EraserDown=false;
}

