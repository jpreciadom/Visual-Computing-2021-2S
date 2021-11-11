let img;
function setup() {
  createCanvas(720, 400);
  img = loadImage("/Visual-Computing-2021-2S/sketches/Zollner.jpg");
}
function draw() {
  image(img, img.width, img.height); // Dibuja la imagen
}