console.log("start project");
/*1. Precondiciones: Debe de tener 25 preguntas (5 preguntas por categorías) para 5
rondas, cada categoría tiene una complejidad o nivel de dificultad, cada ronda debe
asignarle un premio que el jugador va a ganar, el premio puede ser puntos o dinero.*/

const obtenerPreguntas= (categoría)=>{
	categorías={  //lista de categorias segun su nivel de pregunta
		categoríaA:["preg1A","preg2A","preg3A","preg4A","preg5A"],
		categoríaB:["preg1B","preg2B","preg3B","preg4B","preg5B"],
		categoríaC:["preg1C","preg2C","preg3C","preg4C","preg5C"],
		categoríaD:["preg1D","preg2D","preg3D","preg4D","preg5D"],
		categoríaE:["preg1E","preg2E","preg3E","preg4E","preg5E"],
	}
	if(categorías[categoría]!==undefined){return categorías[categoría];}
	else{ return false;}
}


/*2. El jugador inicia con la primera ronda, el sistema busca la categoría del primer nivel y
escoge una pregunta de esa categoría.*/

const eligeCategoria=(n,nivel)=>{
	let rta;
	if (n==1) {rta=obtenerPreguntas("categoríaA");}
	if (n==2) {rta=obtenerPreguntas("categoríaB");}
	if (n==3) {rta=obtenerPreguntas("categoríaC");}
	if (n==4) {rta=obtenerPreguntas("categoríaD");}
	if (n==5) {rta=obtenerPreguntas("categoríaE");}
	nivel--; //el nivel esta -1 por indice de arreglo
	return rta[nivel];
}

/* --------------- aqui doy el orden de las categorías por nivel --------------- */
let orden = [1,2,3,4,5];
orden = orden.sort(function() {return Math.random() - 0.5});
/*--------------------------------------------------------------------------------*/


for (i = 1; i < 6; i++) {  //recorro todos los niveles
  console.log("nivel ",i);
  orden.forEach(function(a) {respuesta=eligeCategoria(a,i);console.log(respuesta);}); //obtengo las preguntas de todas las categorias segun el orden ya elegido por sistema
} 


/*3. El Jugador selecciona una opción de las 4 opciones que tiene, si pierde se finaliza el
juego si gana continua a la siguiente ronda.*/


/*4. La siguiente ronda selecciona una pregunta de un grado de complejidad mayor según
la categoría. Hace el mismo comportamiento del ítem 4.*/

/*5. Si llega a la ronda 5 y pasa, entonces gana el juego, el premio mayor debería estar en
la última ronda.*/