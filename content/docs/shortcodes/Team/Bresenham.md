# Bresenham’s circle drawing algorithm
Bresenham’s algorithms uses the key feature of circle that it is highly symmetric. So, for whole 360 degree of circle we will divide it in 8-parts each octant of 45 degree. In order to do that we will use Bresenham’s Circle Algorithm for calculation of the locations of the pixels in the first octant of 45 degrees. It assumes that the circle is centered on the origin. So for every pixel (x, y) it calculates, we draw a pixel in each of the 8 octants of the circle as shown below : 

{{< p5-div sketch="/Visual-Computing-2021-2S/sketches/Bresenham.js" >}}