var gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = loadImage("/Visual-Computing-2021-2S/sketches/circle.gif");
  gif_createImg = createImg("/Visual-Computing-2021-2S/sketches/circle.gif");
}

function setup() {
  createCanvas(589, 589);
}

function draw() {
    image(gif_loadImg, 0, 0); // Dibuja la imagen
  }
