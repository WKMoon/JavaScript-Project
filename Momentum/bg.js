// WookyungMoon
const body = document.querySelector("body");
const IMG_NUMBER = 1;


function paintImg(imgNum) {
    const img = new Image();
    img.src = `img/${imgNum + 1}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();