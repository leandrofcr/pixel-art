// window.onload ( define a cor preto)


function createPixelBoard() {
  let pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < 5; index += 1) {
    let pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    pixelBoard.appendChild(pixelRow);

    let pixelRowRef = document.querySelector('#pixel-board').lastChild;
    for (let index = 0; index < 5; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelRowRef.appendChild(pixel);
    }
  }
}

createPixelBoard();


let colorsList = document.querySelectorAll('.color');
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let color3 = document.querySelector('#color3');
let color4 = document.querySelector('#color4');

color1.addEventListener('click', function () {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color1.classList.add('selected');
});

color2.addEventListener('click', function () {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color2.classList.add('selected');
});

color3.addEventListener('click', function () {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color3.classList.add('selected');
});

color4.addEventListener('click', function () {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color4.classList.add('selected');
});

let selectedColor = document.querySelector('.selected');
let pixelList = document.querySelectorAll('.pixel');


pixelList.forEach(function(elem) {
  elem.addEventListener("click", function() {
    elem.style.backgroundColor = 'red'; //temp
  });
});
