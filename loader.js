document.addEventListener("DOMContentLoaded", ()=>{
let MustLoad=0;

function ImgLoaded(){
    let ID = document.getElementById("Loading");
	ID.style.display = "none";
} 

function loadImgStart(){
    let ID = document.getElementById("Loading");
    ID.style.display = "block";
    for( let pic in imagesPIC ){
        let picUrl = urlPics + imagesPIC[pic]
        if( imagesPIC[pic] ) PreLoad(pic, picUrl);    
       // console.log("Грузим: " + picUrl);
    }
} 

function PreLoaded(){
    MustLoad--;  
    if( ! MustLoad ) ImgLoaded();
    console.log("Осталось загрузить: " + MustLoad)
}

function PreLoad(picId, picName){
    MustLoad++;  
    let ID = document.getElementById(picId);
    ReLoad(picName, 5);
}


function ReLoad(picName, Times){
    let img = new Image();
    img.src = picName;  
    if ( Times == 0 ) console.log("ОШИБКА загрузки: "+picName);
    if ( ! img.complete ) setTimeout(function(){ ReLoad(picName, Times--);}, 123);
    else  MustLoad--;  
    Loading.innerHTML=picName;
      
    // console.log(picName+" "+img.complete, MustLoad);
    if( ! MustLoad ) ImgLoaded();
}

loadImgStart();

}
);
