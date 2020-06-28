const conatiner = document.getElementById("container");
const clearButton = document.getElementById("clear");
const resizeButton = document.getElementById("resize");

let size = 16;

function getRandomColor() {
    let values = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i<6; i++) {
        color += values[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeGrid(size) {
    conatiner.style.setProperty('--grid-rows', size);
    conatiner.style.setProperty('--grid-cols', size);
    for (let i = 0; i< (size * size); i++) {
        let cell = document.createElement("div");

        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = getRandomColor();
        });

        conatiner.appendChild(cell).className = "grid-item";
    };
}

makeGrid(size);

function clearScreen(size) {
    while (conatiner.hasChildNodes()) {
        conatiner.removeChild(conatiner.firstChild);
    }
    makeGrid(size);
}


clearButton.onclick = function() {clearScreen(size)};

function resize(size) {
    while (conatiner.hasChildNodes()) {
        conatiner.removeChild(conatiner.firstChild);
    }
    makeGrid(size);
}

resizeButton.onclick = function() {
    size = prompt("How big should the grid be? (n x n)");
    if (isNaN(size) || size <= 0) {
        alert ("Only positive numbers are accepted!");
        size = 16;
    }
    size = Math.floor(size);
    resize(size);
}