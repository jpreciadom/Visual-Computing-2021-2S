let img;
function setup() {
  createCanvas(140, 140);
  img = loadImage("/Visual-Computing-2021-2S/sketches/Overlapping.JPG");
}
function draw() {
  image(img, 0, 0); // Dibuja la imagen
}