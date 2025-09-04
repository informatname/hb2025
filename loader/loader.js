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
           
        }
    } 
    
    function PreLoaded(){
        MustLoad--;  
        if( ! MustLoad ) ImgLoaded();
        //console.log("Осталось загрузить: " + MustLoad)
    }
    
    function PreLoad(picId, picName){
        MustLoad++;  
        let ID = document.getElementById(picId);
        ReLoad(picName, 32);
        //console.log("Грузим: " + picName);
    }
    
    
    function ReLoad(PicName, N) {
        var img = new Image();
        img.src = PicName;
        //console.log(img.src,N);
        if (N <= 0) {
            console.log("ОШИБКА загрузки: " + img.src, MustLoad);
            MustLoad--;
            if (!MustLoad) ImgLoaded();
            return false;
        }
        if (!img.complete) setTimeout(function () { ReLoad(PicName, --N); }, 1230);
        else setTimeout(PreLoaded, 100);
        //console.log(img.src+" "+img.complete, MustLoad);
        if ( !MustLoad ) ImgLoaded();
    }

    
    loadImgStart();
    
});
    