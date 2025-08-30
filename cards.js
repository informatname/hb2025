const Cards = [
    {icon: "images/i01.jpg", 
     card: "images/c01.jpg", 
    },
    {icon: "images/i02.jpg", 
     card: "images/c02.gif", 
    },
    {icon: "images/i03.jpg", 
     card: "images/c03.gif", 
    },
    {icon: "images/i04.jpg", 
     card: "images/c04.jpg", 
    },
    {icon: "images/i05.jpg", 
     card: "images/c05.png", 
    },
    {icon: "images/i06.jpg", 
     card: "images/c06.jpg", 
    },
    {icon: "images/i07.jpg", 
     card: "images/c07.gif", 
    },
    {icon: "images/i08.jpg", 
     card: "images/c08.jpg", 
    },
    {icon: "images/i09.jpg", 
     card: "images/c09.gif", 
    },
    {icon: "images/i10.jpg", 
     card: "images/c10.jpg", 
    },
    {icon: "images/i11.jpg", 
     card: "images/c11.jpg", 
    },
    {icon: "images/i12.jpg", 
     card: "images/c12.jpg", 
    }

];

let HideCards=[];



function PutCards(){
    let hideCanvas = document.getElementById('hideScreen');
   	let ctx = hideCanvas.getContext('2d');

    const W = 60;
    const H = 60;
   
    HideCards=[];

    for(let c of Cards){// Временно
        let pic = new Image(); 
        pic.src = c.icon;
        let loading = false;
        let n = 1000;
        pic.onload = () => {loading = true;}
        while( ! loading ){
            n--;
            if (n<0) break;
        }
        //console.log("Загрузилась: ", pic, loading);
    }
    
    
    
    let X = 0;
    let Y = 0;
    for(let c of Cards){
        let pic = new Image(); 
        pic.src = c.icon;
        let noOverlap = true;
        while(noOverlap){
           X = Math.random()*(hideCanvas.width-W);
           Y = Math.random()*(hideCanvas.height-H);
           noOverlap = checkOverlap(HideCards, X, Y, W, H);
           
        }

        //console.log(pic,X,Y)

        let newCard={'x':X, 'y':Y, img: c.card }
        HideCards.push(newCard);
        
        ctx.drawImage(pic, X, Y, W, H);  // Рисуем изображение от точки с координатами X, Y
    // ctx.drawImage(pic, X, Y, 100, 100);  // Рисуем изображение от точки с координатами X, Y
    }
    console.log(HideCards)
}

function checkOverlap(list, x, y, w, h){
    let Overlap = false;
    for(elem of list){
        if ( Math.abs(x - elem.x)< w*1.01 && Math.abs(y - elem.y) < h*1.01 ){
            Overlap = true;
            console.log("перекрытие");
        }
    }
    return Overlap;
}

