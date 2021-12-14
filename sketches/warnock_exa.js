let img;
function setup() {
  createCanvas(525, 350);
  img = loadImage("/Visual-Computing-2021-2S/sketches/Warnock_exa.JPG");
}
function draw() {
  image(img, 0, 0); // Dibuja la imagen
}