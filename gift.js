


document.addEventListener("DOMContentLoaded",
   function () {
    
      window.addEventListener("resize", ReSize);
   });


   function GameOver(img){

      CongDiv.removeEventListener("click", CongHide);

      let IDtext = document.getElementById("CongText");
      let IDdiv = document.getElementById("CongDiv");
      let IDpic = document.getElementById("CongImg");
      IDpic.src = "images/loading.gif"; 
      IDdiv.style.cursor = "wait";

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
         let IDdiv = document.getElementById("CongDiv");
         IDdiv.style.cursor = "pointer";

      },
      9000);
  }
  
  function GiftShow(Show) {
      Congrat(Show);
   }

   function CongHide() {
      let IDdiv = document.getElementById("CongDiv");
      IDdiv.style.display = "none";

      let Loading = document.getElementById("CongImg");
      Loading.innerHTML = "";
      //console.log("Loading: " + Loading.src);
      
      NewGame();
   }

   function ReSize(){
      //GiftRePut();
   }

   function GameOverResize(){
      let IDpic = document.getElementById("CongImg");
      if( window.innerWidth < window.innerHeight ) {
           IDpic.classList.remove("CongImgW");
           IDpic.classList.add("CongImgH");
      }
      else{
          IDpic.classList.remove("CongImgH");
          IDpic.classList.add("CongImgW");
      }
  }