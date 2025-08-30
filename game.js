document.addEventListener("DOMContentLoaded",
  start
)

let EraserDown=false;
let EraserMove=false;

let Ecursor = "wait";

function start() {
  const MenuSize = 0// Временно
  EraserDown=false;
  
  let upCanvas = document.getElementById('upScreen');
  let hideCanvas = document.getElementById('hideScreen');

  Ecursor = "wait";
  upCanvas.style.cursor = Ecursor;


  if (upCanvas && upCanvas.getContext) {
    let id = document.getElementsByClassName(`screen`)[0];
    let p = id.getBoundingClientRect();

    //canvas.width = window.innerWidth * 0.8 - MenuSize;
    //canvas.height = window.innerHeight * 0.6;
    upCanvas.width = p.width * 0.99 - MenuSize;
    upCanvas.height = p.height * 0.99;
    upCanvas.style.top = p.top+"px";
    upCanvas.style.left = p.left+"px";

    hideCanvas.width = upCanvas.width;
    hideCanvas.height = upCanvas.height;
    hideCanvas.style.top = p.top+"px";
    hideCanvas.style.left = p.left+"px";

    let ctx = upCanvas.getContext('2d');

    let pic = new Image();
    pic.src = "images/back.jpg";
    // pic.src = "card/c01.jpg";
    // console.log(pic)


  pic.onload = function () {
    for (var i = 0; i <= upCanvas.width; i+=200) {
      for (var j = 0; j <= upCanvas.height; j+=200) {
        ctx.drawImage(pic, i, j, 200, 200);
      }
    }

    PutCards();
    Ecursor = "pointer";
    upCanvas.style.cursor = Ecursor;
  };
  

  //  ctx.putImageData(pic, 0, 0);

  }
  
  //canvas.onmousemove="EraserMove(event)"
  upCanvas.addEventListener("mousedown", (event) => eraserStart(event));
  upCanvas.addEventListener("mouseup", (event) => eraserStop(event));
  upCanvas.addEventListener("mousemove", (event) => eraserMove(event));

  upCanvas.addEventListener("click", (event) => eraserClick(event));
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

     //console.log("Erase: ",X,Y,  p.left, p.top);
  }
  
}

function clickPic(X,Y){

let canvas = document.getElementById('upScreen');
  
  if (canvas && canvas.getContext){
  	let ctx = canvas.getContext('2d');
    let p = canvas.getBoundingClientRect();

    let x = X-p.left;
    let y = Y-p.top;
    
    let img = null;
    const W = 60;
    const H = 60;
    for(pic of HideCards){
      let dx = x - pic.x;
      let dy = y - pic.y;
      if ( 0<dx && dx < W && 0<dy && dy < H ) {
            img = pic.img;
            console.log(X, Y, pic.x, pic.y);
        }
    }
    console.log("ClickPic: ", x, y,  p.left, p.top, img);   
    if( img ) GameOver(img);
  }
}

function eraserStart(E){
 	 erase(E.clientX,E.clientY);
	 EraserDown=true;
   EraserMove=false;
   console.log("Ereser: ", EraserDown);   
}
function eraserMove(E){
  EraserMove=true;
  if( EraserDown )
 	   erase(E.clientX,E.clientY);
}
function eraserStop(){
	 EraserDown=false;
   console.log("Ereser: ", EraserDown);   
}

function eraserClick(E){
  if( ! EraserMove )	
    clickPic(E.clientX,E.clientY); 
}
