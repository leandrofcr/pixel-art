// Define a cor preta como inicial ao carregara página
window.onload = initialSetup;

function initialSetup() {
  color1.classList.add('selected');
}


let sizeButton = document.getElementById('generate-board');
sizeButton.addEventListener('click', createPixelBoard2)


// Criar o board padrao de tamanho 5x5

function createPixelBoardDefault() {
  let pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < 5; index += 1) {
    let pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    pixelBoard.appendChild(pixelRow);


    let pixelRowRef = document.querySelector('#pixel-board').lastChild;
    for (let index2 = 0; index2 < 5; index2 += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelRowRef.appendChild(pixel);
    }
  }

  let pixelList = document.querySelectorAll('.pixel');

  pixelList.forEach(function (elem) {
    elem.addEventListener('click', function () {
      elem.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected'), null).getPropertyValue('background-color');
    });
  });
};
createPixelBoardDefault();


// Cria o board conforme tamanho inserido no input

function createPixelBoard2() {
  deleteBoard();
  let boardSize = document.getElementById('board-size').value;
  let pixelBoard = document.querySelector('#pixel-board');
  
  if (boardSize ===''){
    alert('Board inválido!')
  }

  for (let index = 0; index < boardSize; index += 1) {
    let pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    pixelBoard.appendChild(pixelRow);


    let pixelRowRef = document.querySelector('#pixel-board').lastChild;
    for (let index2 = 0; index2 < boardSize; index2 += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelRowRef.appendChild(pixel);
    }
  }
  let pixelList = document.querySelectorAll('.pixel');
  pixelList.forEach(function (elem) {
    elem.addEventListener('click', function () {
      elem.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected'), null).getPropertyValue('background-color');
    });
  });
};


//-------refatorar ------

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


// Cria um eventListener para o botão de limpar o board. Aplica background = white

let resetButton = document.getElementById('clear-board');

resetButton.addEventListener('click', function () {
  let pixelList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
})

function deleteBoard() {
  let getBoard = document.getElementById('pixel-board')
  getBoard.innerHTML= '';
}
