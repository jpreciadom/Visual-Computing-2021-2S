new p5((p) => {

  // Remove this later
  const basePath = "/Visual-Computing-2021-2S/assets/photomosaic/";
  const imagesPaths = [
  ];

  const loadedImages = [
  ];

  // Nuesta imagen objetivo
  let targetImage;
  // Imagen objetivo mas pequeña
  let smallerTargetImage;
  // images que se van a usar para construir el foto mosaico
  let allImages = [];
  // Imagenes pro brillo
  let brightImages = {};

  let scl = 16;
  let w, h;

  function slcValueChanged() {
    scl = this.value();
    setSmallerTargetImage();
  }

  function setAllVariables() {
    // Reescalar las imagenes
    allImages = loadedImages.map((img) => {
      const { width, height } = img;
      const image = p.createImage(scl, scl, p.RGB);
      image.copy(img, 0, 0, width, height, 0, 0, scl, scl);
      image.loadPixels();
      return image;
    });


    // Valor de brillo correspondiente a las imágenes
    const allImagesBrihtness = [];
    
    // Calcular el brillo promedio de cada imagen
    allImages.forEach((image) => {
      let avgBrightness = 0;
      image.pixels.forEach((pixel) => {
        avgBrightness += p.brightness(pixel);
      });

      avgBrightness /= image.pixels.length;
      allImagesBrihtness.push(avgBrightness);
    });

    // Selecciona la imagen cuyo brillo promedio
    // mas se aproxima al brillo objetibo
    for (let i = 0; i < 256; i++) {
      let record = 256;
      allImagesBrihtness.forEach((brightness, idx) => {
        let diff = p.abs(i - brightness);
        if (diff < record) {
          record = diff;
          brightImages[i] = allImages[idx];
        }
      });
    }
    setSmallerTargetImage();
  }

  function setSmallerTargetImage() {
    // Construye una copia más pequeña de la imagen
    // objetivo
    const { width, height } = targetImage;

    w = width / scl;
    h = height / scl;

    smallerTargetImage = p.createImage(w, h, p.RGB);
    smallerTargetImage.copy(targetImage, 0, 0, width, height, 0, 0, w, h);
    smallerTargetImage.loadPixels();

    p.loop();
  }

  p.preload = function () {
    targetImage = p.loadImage(`${basePath}targetImage.jpeg`);

    imagesPaths.forEach((path) => {
      loadedImages.push(p.loadImage(`${basePath}${path}`));
    });
  };

  p.setup = function () {
    const { width, height } = targetImage;
    p.createCanvas(width, height + 15);
    p.strokeWeight(0); // medium weight lines
    p.smooth(); // antialias lines

    setAllVariables();

    const slider = p.createSlider(1, width, scl, 1);
    slider.position(20, height + 15);
    slider.size(width - 40);
    slider.input(slcValueChanged);
  };

  p.draw = function() {
    p.background(0);

    if (allImages.length > 0) {
      for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
          const index = (x + (y * w)).toFixed(0);
          const c = smallerTargetImage.pixels[index];

          const imageIndex = Number(p.brightness(c).toFixed(0));
          p.image(
            brightImages[imageIndex],
            x*scl,
            y*scl,
            scl,
            scl,
          );
        }
      }
    }

    p.noLoop();
  };
}, "Fotomosaico")