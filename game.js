document.addEventListener("DOMContentLoaded",
  function (){
         ////    let id = document.getElementsByClassName('menu')[0];
         ////id.innerHTML = "TachScreen<br>";

  start();
  


  }
)

let EraserDown=false;
let EraserMove=false;
const MaxCanvas = 1300;
const MaxBaseEraseSize = 130;
const MinBaseEraseSize = 32;

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
    if( upCanvas.width > MaxCanvas ) upCanvas.width = MaxCanvas;
    upCanvas.height = p.height * 0.99;
    if( upCanvas.height > MaxCanvas ) upCanvas.height = MaxCanvas;
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
    
    let eraserSize = MaxBaseEraseSize;
    if ( upCanvas.width > upCanvas.height )
      eraserSize = eraserSize * upCanvas.width / MaxCanvas;
    else
      eraserSize = eraserSize * upCanvas.height / MaxCanvas;
    if ( eraserSize < MinBaseEraseSize )
      eraserSize = MinBaseEraseSize;
  console.log("eraserSize : ", eraserSize );
  pic.onload = function () {
    for (var i = 0; i <= upCanvas.width; i+=eraserSize) {
      for (var j = 0; j <= upCanvas.height; j+=eraserSize) {
        ctx.drawImage(pic, i, j, eraserSize, eraserSize);
      }
    }

    PutCards(eraserSize, eraserSize);
    Ecursor = "pointer";
    upCanvas.style.cursor = Ecursor;
  };
  
  }
  
  
  upCanvas.addEventListener("mousedown", (event) => eraserStart(event), false);
  upCanvas.addEventListener("touchstart", function (event) {
         ////let id = document.getElementsByClassName('menu')[0];
         ////id.innerHTML+="touchstart<br>";
         event.stopPropagation();
         event.preventDefault();
         EraserMove=false;
         let Mouse_X = event.changedTouches[0].pageX; 
         let Mouse_Y = event.changedTouches[0].pageY;
         fingerErase(Mouse_X, Mouse_Y);
      }, false);


  upCanvas.addEventListener("mousemove", (event) => eraserMove(event));
  upCanvas.addEventListener("touchmove", function (event) {
         ////let id = document.getElementsByClassName('menu')[0];
         ////id.innerHTML+="touchmove<br>";

	       event.stopPropagation();
         event.preventDefault();
         EraserMove = true;
         let Mouse_X = event.changedTouches[0].pageX; 
         let Mouse_Y = event.changedTouches[0].pageY;
         fingerErase(Mouse_X, Mouse_Y);
      });

  upCanvas.addEventListener("mouseup", (event) => eraserStop(event));
  upCanvas.addEventListener("touchend", function (event) {
         ////let id = document.getElementsByClassName('menu')[0];
         ////id.innerHTML+="touchend "+EraserMove+"<br>";

         //event.stopPropagation();
         //event.preventDefault();
         let Mouse_X = event.changedTouches[0].pageX; 
         let Mouse_Y = event.changedTouches[0].pageY;
         ////window.alert("touchend");
         fingerClick(Mouse_X, Mouse_Y);
  }); 

  //upCanvas.addEventListener("click", (event) => eraserClick(event));
  upCanvas.onclick = eraserClick;

  window.addEventListener("resize", start, true);
}

function fingerErase(X, Y ) {
    if (X === undefined) X = Mouse_X;
    if (Y === undefined) Y = Mouse_Y;
    console.log("fingerErase: ",X, Y);
    erase(X, Y);            
}

function fingerClick(X, Y ) {
    console.log("fingerClick: ",X, Y);
    if( ! EraserMove ){
       ////window.alert(X+":"+Y);
       clickPic(X,Y);
    }
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

////let id = document.getElementsByClassName('menu')[0];
////id.innerHTML+="click<br>";

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

function NewGame(){
  start();
}