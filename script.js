// DEFINE A COR PRETA COMO A COR INICIAL
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

// REFERENCIA: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
// ACESSO EM 09/03/2021

// CRIA UM BOARD DE TAMANHO NXN. ONDE N É O PARMETRO DE ENTRADA
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

// CRIA UM BOARD PADRÃO 5X5
function defaultBoard() {
  createBoard(5);
  const pixelList = document.querySelectorAll('.pixel');
  pixelList.forEach(selectedColorEvent);
}
defaultBoard();

// DELETA O BOARD ATUAL PARA CRIAÇÃO DE UM NOVO
function deleteBoard() {
  const getBoard = document.getElementById('pixel-board');
  getBoard.innerHTML = '';
}

// VERIFICA SE O TAMANHO DO BOARD ESTÁ ENTRE 5 E 50
function checkBoardSize(number) {
  if (number < 5) {
    return 5;
  }
  if (number > 50) {
    return 50;
  }
  return number;
}

// CRIA UM BOARD COM O TAMANHO INSERIDO NO INPUT
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

// ------------------------------------------------------

// RECUPERA OS ELEMENTOS DAS PALETAS DE CORES
const colorsList = document.querySelectorAll('.color');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

// CRIA UM EVENT LISTENER PARA CADA COR DA PALETA DE COR
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
// ------------------------------------------------------

// CRIA O EVENT LISTENER PARA O BOTÃO DE LIMPAR O BOARD
const resetButton = document.getElementById('clear-board');

function resetBoard() {
  const pixelList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

resetButton.addEventListener('click', resetBoard);

// GERA A PALETA DE CORES ALEATORIAMENTE

const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
const randomColor4 = Math.floor(Math.random() * 16777215).toString(16);

// REFERENCIA: https://css-tricks.com/snippets/javascript/random-hex-color/
// ACESSO EM 09/03/2021

color2.style.backgroundColor = `#${randomColor2}`;
color3.style.backgroundColor = `#${randomColor3}`;
color4.style.backgroundColor = `#${randomColor4}`;
