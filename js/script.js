console.log("start project");
/*1. Precondiciones: Debe de tener 25 preguntas (5 preguntas por categorías) para 5
rondas, cada categoría tiene una complejidad o nivel de dificultad, cada ronda debe
asignarle un premio que el jugador va a ganar, el premio puede ser puntos o dinero.*/
let preg1A={pregunta:"esta es la pregunta 1 A?",opcionA: true,pre1A: "opcion A", opcionB: false,pre1B: "opcion B", opcionC: false,pre1C: "opcion C", opcionD: false,pre1D: "opcion D" },
	preg2A={pregunta:"esta es la pregunta 2 A?",opcionA: true,pre2A: "opcion A", opcionB: false,pre2B: "opcion B", opcionC: false,pre2C: "opcion C", opcionD: false,pre2D: "opcion D" },
	preg3A={pregunta:"esta es la pregunta 3 A?",opcionA: true,pre3A: "opcion A", opcionB: false,pre3B: "opcion B", opcionC: false,pre3C: "opcion C", opcionD: false,pre3D: "opcion D" },
	preg4A={pregunta:"esta es la pregunta 4 A?",opcionA: true,pre4A: "opcion A", opcionB: false,pre4B: "opcion B", opcionC: false,pre4C: "opcion C", opcionD: false,pre4D: "opcion D" },
	preg5A={pregunta:"esta es la pregunta 5 A?",opcionA: true,pre5A: "opcion A", opcionB: false,pre5B: "opcion B", opcionC: false,pre5C: "opcion C", opcionD: false,pre5D: "opcion D" };

let preg1B={pregunta:"esta es la pregunta 1 B?",opcionA: true,pre1A: "opcion A", opcionB: false,pre1B: "opcion B", opcionC: false,pre1C: "opcion C", opcionD: false,pre1D: "opcion D" },
	preg2B={pregunta:"esta es la pregunta 2 B?",opcionA: true,pre2A: "opcion A", opcionB: false,pre2B: "opcion B", opcionC: false,pre2C: "opcion C", opcionD: false,pre2D: "opcion D" },
	preg3B={pregunta:"esta es la pregunta 3 B?",opcionA: true,pre3A: "opcion A", opcionB: false,pre3B: "opcion B", opcionC: false,pre3C: "opcion C", opcionD: false,pre3D: "opcion D" },
	preg4B={pregunta:"esta es la pregunta 4 B?",opcionA: true,pre4A: "opcion A", opcionB: false,pre4B: "opcion B", opcionC: false,pre4C: "opcion C", opcionD: false,pre4D: "opcion D" },
	preg5B={pregunta:"esta es la pregunta 5 B?",opcionA: true,pre5A: "opcion A", opcionB: false,pre5B: "opcion B", opcionC: false,pre5C: "opcion C", opcionD: false,pre5D: "opcion D" };

let preg1C={pregunta:"esta es la pregunta 1 C?",opcionA: true,pre1A: "opcion A", opcionB: false,pre1B: "opcion B", opcionC: false,pre1C: "opcion C", opcionD: false,pre1D: "opcion D" },
	preg2C={pregunta:"esta es la pregunta 2 C?",opcionA: true,pre2A: "opcion A", opcionB: false,pre2B: "opcion B", opcionC: false,pre2C: "opcion C", opcionD: false,pre2D: "opcion D" },
	preg3C={pregunta:"esta es la pregunta 3 C?",opcionA: true,pre3A: "opcion A", opcionB: false,pre3B: "opcion B", opcionC: false,pre3C: "opcion C", opcionD: false,pre3D: "opcion D" },
	preg4C={pregunta:"esta es la pregunta 4 C?",opcionA: true,pre4A: "opcion A", opcionB: false,pre4B: "opcion B", opcionC: false,pre4C: "opcion C", opcionD: false,pre4D: "opcion D" },
	preg5C={pregunta:"esta es la pregunta 5 C?",opcionA: true,pre5A: "opcion A", opcionB: false,pre5B: "opcion B", opcionC: false,pre5C: "opcion C", opcionD: false,pre5D: "opcion D" };

let preg1D={pregunta:"esta es la pregunta 1 D?",opcionA: true,pre1A: "opcion A", opcionB: false,pre1B: "opcion B", opcionC: false,pre1C: "opcion C", opcionD: false,pre1D: "opcion D" },
	preg2D={pregunta:"esta es la pregunta 2 D?",opcionA: true,pre2A: "opcion A", opcionB: false,pre2B: "opcion B", opcionC: false,pre2C: "opcion C", opcionD: false,pre2D: "opcion D" },
	preg3D={pregunta:"esta es la pregunta 3 D?",opcionA: true,pre3A: "opcion A", opcionB: false,pre3B: "opcion B", opcionC: false,pre3C: "opcion C", opcionD: false,pre3D: "opcion D" },
	preg4D={pregunta:"esta es la pregunta 4 D?",opcionA: true,pre4A: "opcion A", opcionB: false,pre4B: "opcion B", opcionC: false,pre4C: "opcion C", opcionD: false,pre4D: "opcion D" },
	preg5D={pregunta:"esta es la pregunta 5 D?",opcionA: true,pre5A: "opcion A", opcionB: false,pre5B: "opcion B", opcionC: false,pre5C: "opcion C", opcionD: false,pre5D: "opcion D" };

let preg1E={pregunta:"esta es la pregunta 1 E?",opcionA: true,pre1A: "opcion A", opcionB: false,pre1B: "opcion B", opcionC: false,pre1C: "opcion C", opcionD: false,pre1D: "opcion D" },
	preg2E={pregunta:"esta es la pregunta 2 E?",opcionA: true,pre2A: "opcion A", opcionB: false,pre2B: "opcion B", opcionC: false,pre2C: "opcion C", opcionD: false,pre2D: "opcion D" },
	preg3E={pregunta:"esta es la pregunta 3 E?",opcionA: true,pre3A: "opcion A", opcionB: false,pre3B: "opcion B", opcionC: false,pre3C: "opcion C", opcionD: false,pre3D: "opcion D" },
	preg4E={pregunta:"esta es la pregunta 4 E?",opcionA: true,pre4A: "opcion A", opcionB: false,pre4B: "opcion B", opcionC: false,pre4C: "opcion C", opcionD: false,pre4D: "opcion D" },
	preg5E={pregunta:"esta es la pregunta 5 E?",opcionA: true,pre5A: "opcion A", opcionB: false,pre5B: "opcion B", opcionC: false,pre5C: "opcion C", opcionD: false,pre5D: "opcion D" };


const obtenerPreguntas= (categoría)=>{
	categorías={  //lista de categorias segun su nivel de pregunta
		categoríaA:[preg1A,preg2A,preg3A,preg4A,preg5A],
		categoríaB:[preg1B,preg2B,preg3B,preg4B,preg5B],
		categoríaC:[preg1C,preg2C,preg3C,preg4C,preg5C],
		categoríaD:[preg1D,preg2D,preg3D,preg4D,preg5D],
		categoríaE:[preg1E,preg2E,preg3E,preg4E,preg5E]	}
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
/*--------------------------------------------------------------------------------*/


for (i = 1; i < 6; i++) {  //recorro todos los niveles
  orden = orden.sort(function() {return Math.random() - 0.5});
// let i=3;
  console.log("nivel ",i);
  orden.forEach(function(a) {respuesta=eligeCategoria(a,i);console.log(respuesta);}); //obtengo las preguntas de todas las categorias segun el orden ya elegido por sistema
} 

// respuesta=eligeCategoria(1,1);console.log(respuesta);



/*3. El Jugador selecciona una opción de las 4 opciones que tiene, si pierde se finaliza el
juego si gana continua a la siguiente ronda.*/




/*4. La siguiente ronda selecciona una pregunta de un grado de complejidad mayor según
la categoría. Hace el mismo comportamiento del ítem 4.*/

/*5. Si llega a la ronda 5 y pasa, entonces gana el juego, el premio mayor debería estar en
la última ronda.*/