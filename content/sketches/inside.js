let img;
function setup() {
  createCanvas(150, 150);
  img = loadImage("/Visual-Computing-2021-2S/sketches/Inside.JPG");
}
function draw() {
  image(img, 0, 0); // Dibuja la imagen
}