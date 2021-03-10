// Define a cor preta como inicial ao carregara página
function initialSetup() {
  document.querySelector('#color1').classList.add('selected');
}
window.onload = initialSetup;

function selectedColorEvent(elem) {
  const pixelElem = elem;
  elem.addEventListener('click', () => {
    const backgroundRef = window.getComputedStyle(document.querySelector('.selected'), null);
    pixelElem.style.backgroundColor = backgroundRef.getPropertyValue('background-color');
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

// Verifica se o tamanho do board está entre 5 e 50
function checkBoardSize(number) {
  if (number < 5) {
    return 5;
  }
  if (number > 50) {
    return 50;
  }
  return number;
}

// Cria o board conforme tamanho inserido no input
function customBoard() {
  deleteBoard();
  const inputSize = document.getElementById('board-size').value;

  if (inputSize === '') {
    alert('Board inválido!');
  }
  const boardSize = checkBoardSize(inputSize);

  createBoard(boardSize);
  const pixelList = document.querySelectorAll('.pixel');
  pixelList.forEach(selectedColorEvent);
}

const sizeButton = document.getElementById('generate-board');
sizeButton.addEventListener('click', customBoard);

const colorsList = document.querySelectorAll('.color');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

function color1Event() {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color1.classList.add('selected');
}
color1.addEventListener('click', color1Event);

function color2Event() {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color2.classList.add('selected');
}
color2.addEventListener('click', color2Event);

function color3Event() {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color3.classList.add('selected');
}
color3.addEventListener('click', color3Event);

function color4Event() {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  color4.classList.add('selected');
}
color4.addEventListener('click', color4Event);

// Cria um eventListener para o botão de limpar o board. Aplica background = white
const resetButton = document.getElementById('clear-board');

function resetBoard() {
  const pixelList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

resetButton.addEventListener('click', resetBoard);
