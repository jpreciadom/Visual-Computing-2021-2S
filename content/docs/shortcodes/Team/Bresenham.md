# Algoritmo de dibujo del círculo de Bresenham
El algoritmo inicialmente fue desarrollado por Jack Elton Bresenham al comienzo del verano de 1962, para dibujar sobre un plóter de Calcomp, operado desde un IBM. Por aquella época era común compartir libremente los programas, y en la empresa era normal que otros compañeros dispusieran de copias. No fue el propio Bresenham quien publicó su algoritmo, sino otros que le pidieron permiso para presentarlo en su nombre en la convención nacional de ACM, en Denver (Colorado) en 1963. Y en 1965 fue impreso por vez primera.Cabe señalar que los plóter de Calcomp, fueron de los primeros dispositivos con salida gráfica a la venta, allá por 1959.

El algoritmo de Bresenham utiliza la característica clave de círculo que es altamente simétrica. Así que, para todo 360 grados de círculo lo dividiremos en 8 partes cada octante de 45 grados. Para ello, utilizaremos el algoritmo Círculo de Bresenham para calcular las posiciones de los pixeles en el primer octante de 45 grados. Suponga que el círculo está centrado en el origen. Así que por cada pixel (x, y) que calcula, dibujamos un pixel en cada uno de los 8 octantes del círculo como se muestra a continuación:

{{< p5-div sketch="/Visual-Computing-2021-2S/sketches/Bresenham.js" >}}

Sources:
https://www.geeksforgeeks.org/bresenhams-circle-drawing-algorithm/
https://en.wikipedia.org/wiki/Midpoint_circle_algorithm
https://es.wikipedia.org/wiki/Algoritmo_de_Bresenham