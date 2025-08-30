

function noselect() { return false; }

document.ondragstart = noselect; // запрет на перетаскивание
document.onselectstart = noselect; // запрет на выделение элементов страницы
document.oncontextmenu = noselect; // запрет на выведение контекстного меню
document.onscroll = noselect; // 
document.onmousewheel = noselect; // 

document.addEventListener("touchstart", tapHandler);

let tapedTwice = false;

function tapHandler(event) {
    if(!tapedTwice) {
        tapedTwice = true;
        setTimeout( function() { tapedTwice = false; }, 300 );
        return false;
    }
    event.preventDefault();
    //action on double tap goes below
    //alert('You tapped me Twice !!!');
 }
 