## Algoritmo de Warnock (Algoritmo de subdivisión de área)
Hoy hablaremos de un algoritmo de visibilidad desarrollado por el científico de la computación John Warnock.
Este algoritmo tiene como principal objetivo determinar las superficies ocultas en una imagen compleja para poder ilustrarla.

Warnock utilizó el método de divide y vencerás dividiendo la escena en 4 partes iguales dependiendo de ciertos criterios (que veremos después en la sección de explicación del algoritmo)para resolver este problema de forma recursiva. Estas subdivisiones en cada caso serán llamadas área de interés.

Antes de entrar en detalles sobre el funcionamiento del algoritmo, hablaremos un poco sobre qué consideraciones es necesario tener a la hora de implementar el algoritmo.
Este algortimo (como lo mencionamos antes) busca determinar si una superficie (compuesta por polígonos) está cubierta o no por otra, así, el algoritmo identifica  tipos de relaciones entre estas:

## 1. Polígono rodeando
El caso en el que un polígono rodea completamente el área de interés.

{{< p5-iframe sketch="/Visual-Computing-2021-2S/sketches/surroundingpolygon.js" width="200" height="200" >}}

## 2. Polígono superpuesto o intersecando
Uno en el que el polígono está parcialmente adentro del área.

{{< p5-iframe sketch="/Visual-Computing-2021-2S/sketches/overlapping.js" width="160" height="160" >}}

## 3. Polígono contenido
El polígono está completamente dentro del área.

{{< p5-iframe sketch="/Visual-Computing-2021-2S/sketches/inside.js" width="190" height="158" >}}

## 4. Polígono disjunto
El polígono está completamente por fuera del área.

{{< p5-iframe sketch="/Visual-Computing-2021-2S/sketches/outside.js" width="190" height="158" >}}

## Parámetros
El algoritmo recibe como entradas el área de trabajo, es decir, la pantalla en la que se dibujarán las imagenes y una lista de polígonos que serán los que se van a dibujar. 
La lista de polígonos se determina usando los valores z de coordenadas de los vértices.

## Algoritmo

1. Se inicializa el área de trabajo.
2. Se genera una lista de los polígonos usando los valores z de sus vértices. No se incluyen los poligonos disjuntos ya que no son visibles en el área.
3. Se buscan las relaciones para cada polígono dentro del área.
4. Se realiza el siguiente test de visibilidad:

    a. Si todos los polígonos están por fuera del área, entonces esta será mostrada del color de fondo.

    b. Si solo hay un polígono intersecando o contenido en el área, primero se llena el área del color de fondo y luego se pinta la parte del polígono que se encuentra allí.

    c. Si solo hay un polígono rodeando, el área se rellena completamente del color del polígono.

    d. Si hay un polígono rodeando que, desde el punto de vista, está por encima de los demás polígonos, el área se rellena totalmente del color de dicho polígono.

    e. Si el área el un pixel (x,y) en el cuál no se cumple ninguna de las condiciones anteriores, entonces el color del pixel se tomará del pixel más cercano.

5. Si ninguna de las condiciones del test se cumple, entonces se subdivide el área y se regresa al paso 2.

## Ventajas

- Es posible optimizar el proceso usando paralelismo ya que se trata de una estrategia de divide y vencerás.
- No se requiere memoria extra para la computación.
- El tiempo de computación está calculado por O(pn), donde p es el número de pixeles del área y n es el número de polígonos.

## Ejemplo

{{< p5-iframe sketch="/Visual-Computing-2021-2S/sketches/warnock_exa.js" width="540" height="375" >}}