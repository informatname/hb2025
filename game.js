document.addEventListener("DOMContentLoaded",
    start 
)


function start(){
const MenuSize=123// Временно

 var canvas = document.getElementById('upScreen');
  if (canvas && canvas.getContext){
 canvas.width = window.innerWidth*0.99 - MenuSize;
 canvas.height = window.innerHeight*0.99;
	
 var ctx = canvas.getContext('2d');
  
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var pixels = imageData.data;
  var shift = 50;
      sr = Math.round(Math.random()* shift);
      sg = Math.round(Math.random()* shift);
      sb = Math.round(Math.random()* shift);
  for (var i = 0, il = pixels.length; i < il; i += 4) {
    pixels[i    ] = Math.round(Math.random() * (255 - sr));
    pixels[i + 1] = Math.round(Math.random() * (255 - sg)); 
    pixels[i + 2] = Math.round(Math.random() * (255 - sb));
    pixels[i + 3] = 255 
  }
  ctx.putImageData(imageData, 0, 0);
  
}

}