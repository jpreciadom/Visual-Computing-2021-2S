new p5((p) => {

  // Nuesta imagen objetivo
  let targetImage;
  // Imagen objetivo mas pequeña
  let smallerTargetImage;
  // images que se van a usar para construir el foto mosaico
  let allImages;
  // Valor de brillo correspondiente a las imágenes
  let allImagesBrihtness;
  // Imagenes pro brillo
  let brightImages;

  p.setup = function () {
    p.createCanvas(426, 418);
    targetImage = p.loadImage("/Visual-Computing-2021-2S/sketches/ebbinghaus.png");

    
  };

  p.draw = function() {
  };
})