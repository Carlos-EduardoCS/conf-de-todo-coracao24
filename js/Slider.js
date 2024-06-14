const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img"); 

let idx = 0;

function carrrousel(){
    idx ++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${ -idx * 250}px)`;
}

setInterval(carrrousel, 1800);