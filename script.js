// Define a cor preta como inicial ao carregara página

function initialSetup() {
  color1.classList.add('selected');
}
window.onload = initialSetup;

function selectedColorEvent(elem) {
  elem.addEventListener('click', function changeColor() {
    const backgroundRef = window.getComputedStyle(document.querySelector('.selected'), null);
    elem.style.backgroundColor = backgroundRef.getPropertyValue('background-color');
  });
}

// Cria um board de tamanho nxn. Onde n é o parametro de entrada

function createBoard(boardSize) {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < boardSize; index += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    pixelBoard.appendChild(pixelRow);

    const pixelRowRef = document.querySelector('#pixel-board').lastChild;
    for (let index2 = 0; index2 < boardSize; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelRowRef.appendChild(pixel);
    }
  }
}

// Criar o board padrao de tamanho 5x5

function defaultBoard() {
  createBoard(5);
  const pixelList = document.querySelectorAll('.pixel');
  pixelList.forEach(selectedColorEvent);
}
defaultBoard();

// Deleta o board atual para criacao de um com tamanho personalizado

function deleteBoard() {
  const getBoard = document.getElementById('pixel-board');
  getBoard.innerHTML = '';
}

// Cria o board conforme tamanho inserido no input

function customBoard() {
  deleteBoard();
  const inputSize = document.getElementById('board-size').value;


  if (inputSize === '') {
    alert('Board inválido!')
  }
  boardSize = checkBoardSize(inputSize);

  createBoard(boardSize);
  let pixelList = document.querySelectorAll('.pixel');
  pixelList.forEach(function (elem) {
    elem.addEventListener('click', function () {
      elem.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected'), null).getPropertyValue('background-color');
    });
  });
};

const sizeButton = document.getElementById('generate-board');
sizeButton.addEventListener('click', customBoard);

function checkBoardSize(number) {
  if (number < 5) {
    return 5;
  }
  if (number > 50) {
    return 50;
  }
  return number;
}





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

// ---------------------

// Cria um eventListener para o botão de limpar o board. Aplica background = white

let resetButton = document.getElementById('clear-board');

resetButton.addEventListener('click', function () {
  let pixelList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
})


