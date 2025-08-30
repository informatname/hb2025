


document.addEventListener("DOMContentLoaded",
   function () {
    
      window.addEventListener("resize", ReSize);
   });


   function GameOver(img){

      CongDiv.removeEventListener("click", CongHide);

      var IDtext = document.getElementById("CongText");
      var IDdiv = document.getElementById("CongDiv");
      var IDpic = document.getElementById("CongImg");
      IDpic.src = "images/loading.gif"; 
      GameOverResize();
    
      IDtext.innerHTML = "Поздравление:" ;
      IDdiv.style.display = "table-cell";

      setTimeout(()=>{
            IDpic.src = img;
         },
         3000
      );
  
      window.addEventListener('resize', GameOverResize, true);

      setTimeout(()=>{
         CongDiv.addEventListener("click", CongHide);
      },
      9000);
  }
  
  function GiftShow(Show) {
      Congrat(Show);
   }

   function CongHide() {
      var IDdiv = document.getElementById("CongDiv");
      IDdiv.style.display = "none";

      var Loading = document.getElementById("CongImg");
      Loading.innerHTML = "";
      //console.log("Loading: " + Loading.src);
      
      NewGame();
   }

   function ReSize(){
      //GiftRePut();
   }

   function GameOverResize(){
      var IDpic = document.getElementById("CongImg");
      if( window.innerWidth < window.innerHeight ) {
           IDpic.classList.remove("CongImgW");
           IDpic.classList.add("CongImgH");
      }
      else{
          IDpic.classList.remove("CongImgH");
          IDpic.classList.add("CongImgW");
      }
  }