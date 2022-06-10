# Reto de Preguntas Sofka

_proyecto que busca que un usuario interactue con un juego con 5 tematicas o categorias, de las cuales cada categoria cuenta con 5 preguntas de disinto nivel, y en total son 25 preguntas que iran ascendiendo de dificultad.
en las que el usuario va subiendo de puntos, y en cualquier pregunta puede salir sin responder para quedar conlos puntos ganados en ese momento, de lo contrario en caso de perder el juego acaba.
y el usuario perdera los puntos, pero si llega ala ultima pregunta ganara. al final los usuarios ganadores o que se reiraron quedaran guardados en el localstorage para tener una lista de puntaje._

## informacion sobre el proyecto 🚀

* **descargar el proyecto de github** 
* **descomprimir mediante el programa llamado Winrar** 
* **abrir el index.html en el navegador** 

# Nota
_el navegador creara un archivo Json que se guardara en el localStorage empleando la persistencia de datos._

_**En caso de desear borrar la lista de puntajes, se debera accerder al localStorage del programa en el navegador y borrarlo.**_ 

_Mediante este proyecto deseo demostrar algunas de mis capacidades en el mundo de la programacion mediante lenguajes de programacion como HTML CSS y JAVSCRIPT._
_Hubo un pequeño error al hacer el ultimo push, y debido a no querer hacerle mas modificaciones al codigo lo deje tal como se ve en la version 1.0
y falto añadir el guardado de los datos en el caso "Fin del juego forzado" que se da cuando el sistema finaliza el juego porque no selecciono una pregunta
correcta, pero esto se soluciona solo agregando una pequeña linea de codigo en el archivo javascript en la linea 194._

_cambiando esto._
```		 
  else{
  alert("Lo siento respuesta incorrecta\n Perdiste !");
  setTimeout(function(){location.reload() ;},3000);} 
```
_a esto._
```		 
  else{save=grabacionObj(); File=savePuntos(save);console.log(File);
  alert("Lo siento respuesta incorrecta\n Perdiste !");
  setTimeout(function(){location.reload() ;},3000);} 
```


## Realizado por:
Jose Leonardo Perez Poveda - shiwirockztar@gmail.com.
