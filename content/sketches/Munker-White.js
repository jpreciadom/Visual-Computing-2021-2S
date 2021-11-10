// took from here: https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/scintillating_grid.js

new p5((p) => {
  const blueRectWidth = 150;
  const blueRectHeight = 18;
  const blueRectSpacing = 50;
  const mod = (blueRectWidth * 2) + (blueRectSpacing * 2);

  let blackRectX = 0;
  const blackRectWidth = blueRectWidth * 3;
  const blackRectHeight = blueRectHeight;
  const blackRectSpacing = blackRectHeight * 2;
  let followMouse = false;

  p.setup = function () {
    p.createCanvas(426, 418);
    p.strokeWeight(0); // medium weight lines
    p.smooth(); // antialias lines
  };

  p.mouseClicked = function() {
    console.log('Mouse clicked');
    followMouse = !followMouse;
  };

  p.draw = function () {
    p.background(200);
    p.drawBlackSquares();
    p.drawBlueSquares();
  };

  p.drawBlackSquares = function () {
    if (followMouse) {
      blackRectX = p.mouseX;
    }
    let y = 38;
    p.fill(0);
    for (let i = 0; i < 10; i++) {
      p.rect(blackRectX, y, blackRectWidth, blackRectHeight);
      y += blackRectSpacing;
    }
  };

  p.drawBlueSquares = function() {
    let x = 38;
    let y = 38;
    p.fill(71, 39, 232);
    for (let i = 0; i < 19; i++) {
      p.rect(x, y, blueRectWidth, blueRectHeight);
      x = (x + blueRectWidth + blueRectSpacing) % mod;
      y += blueRectHeight;
    }
  };
}, "Munker-White");