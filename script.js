let items = document.querySelectorAll(".slidersItem");
let indexItem = 0;
for(let item of items){
    item.style.display = "none"
}
items[indexItem].style.display = "block"

function nextimg(){
    if (indexItem == items.length-1){
        items[indexItem].style.display = "none"
        indexItem = 0
    } 
    else{ 
        items[indexItem].style.display = "none";
        indexItem++; }
    
    items[indexItem].style.display = "block"
}

function previmg(){

    if (indexItem == 0){
        items[indexItem].style.display = "none"
        indexItem = items.length-1
    } 
    else{ 
        items[indexItem].style.display = "none";
        indexItem--; }

    items[indexItem].style.display = "block"
}