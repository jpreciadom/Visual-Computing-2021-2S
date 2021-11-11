let img;
function setup() {
  createCanvas(400, 400);
  img = loadImage("/Visual-Computing-2021-2S/sketches/Pinna effect.gif");
}
function draw() {
  image(img, 0, 0); // Dibuja la imagen
}