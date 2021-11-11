let img;
function setup() {
  createCanvas(560, 560);
  img = loadImage("/Visual-Computing-2021-2S/sketches/pinna.jpg");
}
function draw() {
  image(img, 0, 0); // Dibuja la imagen
}