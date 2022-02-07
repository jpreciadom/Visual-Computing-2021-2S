new p5((p) => {

  // Remove this later
  const basePath = "/Visual-Computing-2021-2S/assets/photomosaic/";
  const imagesPaths = [
    'p1.jpeg',
    'p2.jpeg',
    'p3.jpeg',
    'p4.jpeg',
    'p5.jpeg',
    'p6.jpeg',
    'p7.jpeg',
    'p8.jpeg',
    'p9.jpeg',
    'p10.jpeg',
    'p11.jpeg',
    'p12.jpeg',
    'p13.jpeg',
    'p14.jpeg',
    'p15.jpeg',
    'p16.jpeg',
    'p17.jpeg',
    'p18.jpeg',
    'p19.jpeg',
    'p20.jpeg',
  ];

  const loadedImages = [];

  // Nuesta imagen objetivo
  let targetImage;
  // Imagen objetivo mas pequeña
  let smallerTargetImage;
  // images que se van a usar para construir el foto mosaico
  let allImages = [];
  // Imagenes pro brillo
  let brightImages = {};

  let scl = 1;

  function slcValueChanged() {
    scl = this.value();
    setAllVariables();
  }

  function setAllVariables() {
    // Reescalar las imagenes
    allImages = loadedImages.map((img) => {
      const { width, height } = img;
      const image = p.createImage(scl, scl, p.RGB);
      image.copy(img, 0, 0, width, height, 0, 0, scl, scl);
      return image;
    });


    // Valor de brillo correspondiente a las imágenes
    const allImagesBrihtness = [];
    
    // Calcular el brillo promedio de cada imagen
    allImages.forEach((image) => {
      image.loadPixels();

      let avgBrightness = 0;
      image.pixels.forEach((pixel) => {
        avgBrightness += p.brightness(pixel);
      });

      avgBrightness /= image.pixels.length;
      allImagesBrihtness.push(avgBrightness);
    });

    // Selecciona la imagen cuyo brillo promedio
    // mas se aproxima al brillo objetivo
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

    const w = width / scl;
    const h = height / scl;

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
    p.createCanvas(width, height + 50);

    setAllVariables();

    const slider = p.createSlider(1, 100, scl, 1);
    slider.position(20, height + 60);
    slider.size(width - 40);
    slider.input(slcValueChanged);
  };

  p.draw = function() {
    p.background(0);
    let { width, height } = smallerTargetImage;
    width = Math.floor(width);
    height = Math.floor(height);

    if (allImages.length > 0) {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {

          const index = (x + (y * width)) * 4;
          const c = smallerTargetImage.pixels[index];

          const imageIndex = Math.floor(p.brightness(c));
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

    // p.image(smallerTargetImage, 0, 0);
    p.noLoop();
  };
}, "Fotomosaico")