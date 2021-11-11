var img;   // Definimos una variable para almacenar la imagen
function preload() {   // Añadimos una nueva función que nos 
                       // carga la imagen
  img = loadImage("/vc/sketches/ebbinghaus.png");
}
function setup() {
  createCanvas(480, 120);
}
function draw() {
  image(img, 0, 0); // Dibuja la imagen
}