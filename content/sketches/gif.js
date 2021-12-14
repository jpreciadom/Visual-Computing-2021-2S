var gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = loadImage("/Visual-Computing-2021-2S/sketches/circle.gif");
  gif_createImg = createImg("/Visual-Computing-2021-2S/sketches/circle.gif");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  image(img, 0, 0);
  //gif_createImg.position(50, 350);
}
