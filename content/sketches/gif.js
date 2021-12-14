var gif_loadImg, gif_createImg;

function preload() {
  gif_createImg = createImg("circle.gif");
}

function setup() {
  createCanvas(500, 700);
  background(0);
}

function draw() {
  // loads only first frame
  image(gif_loadImg, 50, 50);
  
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(50, 350);
}
