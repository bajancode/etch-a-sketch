const container = document.querySelector('#container');

const button = document.querySelector('#button');
button.addEventListener('click', clearAndResize);

function createGrid(lateralSize) {
    for (let i=0; i < lateralSize**2; i++) {
        let content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
    if (lateralSize) {
        container.style.gridTemplateColumns = "repeat(" + lateralSize + ",1fr)";
      }
    const box = document.querySelectorAll('div.content');
    box.forEach((box) => {
        box.addEventListener('mouseover', changeColor);
    });

let changeLight = 0;
let decreaseLight = 0;
function changeColor(e) {
    e.target.style.background = "rgb(" + defaultRandomColor(changeLight,changeLight,changeLight) + ")";
    if ((changeLight < 255 && decreaseLight == 0 || changeLight == 0)) {
        changeLight ++;
        decreaseLight = 0;
    } else {
        changeLight --;
        decreaseLight = 1;
    }
console.log(changeLight);
}
}
createGrid(16);

function clearAndResize() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    } 
    let gridLateralSize = prompt("How many squares this time? Enter 0 to 100");
    while (gridLateralSize < 1 || gridLateralSize > 100) {
        gridLateralSize = prompt("Weren't you listening? I can only handle from 1 to 100 squares, buddy! Try again!");
    }
    createGrid(gridLateralSize);
}

function defaultRandomColor(randomR = Math.floor(Math.random() * 255),
                            randomG = Math.floor(Math.random() * 255),
                            randomB = Math.floor(Math.random() * 255)) {
  return randomR + "," + randomG + "," + randomB;
}
