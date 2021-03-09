// window.onload ( define a cor preto)


function createPixelBoard() {
  let pixelBoard = document.querySelector('.pixel-board');

  for (let index = 0; index < 5; index += 1) {
    let pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    pixelBoard.appendChild(pixelRow);

    let pixelRowRef = document.querySelector('.pixel-board').lastChild;
    for (let index = 0; index < 5; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelRowRef.appendChild(pixel);
    }
  }
}

createPixelBoard();
