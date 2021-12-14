let img;
function setup() {
  createCanvas(190, 190);
  img = loadImage("/Visual-Computing-2021-2S/sketches/Surroundingpolygon.JPG");
}
function draw() {
  image(img, 0, 0); // Dibuja la imagen
}