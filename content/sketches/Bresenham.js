new p5((p) => {
    let canvaSize = 430;
    let squareSize = 10;
    let middlePoint = {
        x: 210,
        y: 210,
    };
    let r = 200;

    p.setup = function () {
        p.createCanvas(canvaSize, canvaSize);
        p.background(255);
        p.strokeWeight(1);
        p.stroke(150);
        p.smooth();
    };

    p.draw = function () {
        p.drawGrid();
        p.calculateCircle();
    };

    p.drawGrid = function () {
        p.fill(255);
        for (let x = 0; x < canvaSize; x += squareSize) {
            for (let y = 0; y < canvaSize; y += squareSize) {
                p.square(x, y, squareSize);
            }
        }
    }

    p.calculateCircle = function () {
        p.fill(0, 0, 255);
        p.square(middlePoint.x, middlePoint.y, squareSize);

        let x = 0
        let y = r;
        let d = 3 - 2 * r;
        p.putPixel(x, y);
        while (y >= x) {  
            x+=squareSize;

            if (d > 0) {
                y-=squareSize;
                d = d + 4 * (x - y) + 10;
            } else {
                d = d + 4 * x + 6;
            }
            p.putPixel(x, y);
        }
    }

    p.putPixel = function (xPos, yPos) {
        p.square(middlePoint.x+xPos, middlePoint.y+yPos, squareSize);
        p.square(middlePoint.x-xPos, middlePoint.y+yPos, squareSize);
        p.square(middlePoint.x+xPos, middlePoint.y-yPos, squareSize);
        p.square(middlePoint.x-xPos, middlePoint.y-yPos, squareSize);
        p.square(middlePoint.x+yPos, middlePoint.y+xPos, squareSize);
        p.square(middlePoint.x-yPos, middlePoint.y+xPos, squareSize);
        p.square(middlePoint.x+yPos, middlePoint.y-xPos, squareSize);
        p.square(middlePoint.x-yPos, middlePoint.y-xPos, squareSize);
    }
  }, "Bresenham");