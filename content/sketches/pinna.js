var img;   // Definimos una variable para almacenar la imagen
function preload() {   // Añadimos una nueva función que nos 
                       // carga la imagen
  img = loadImage("/Visual-Computing-2021-2S/sketches/pinna.jpg");
}
function setup() {
  createCanvas(560, 560);
}
function draw() {
  image(img, 0, 0); // Dibuja la imagen
}