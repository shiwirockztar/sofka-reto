console.log("start project");
/*1. Precondiciones: Debe de tener 25 preguntas (5 preguntas por categorías) para 5
rondas, cada categoría tiene una complejidad o nivel de dificultad, cada ronda debe
asignarle un premio que el jugador va a ganar, el premio puede ser puntos o dinero.*/
let preg1A={pregunta:"esta es la pregunta A?",opcionA: true,pre1A: "opcion A", opcionB: false,pre1A: "opcion B", opcionC: false,pre1A: "opcion C", opcionD: false,pre1A: "opcion D" },
	preg2A={pregunta:"esta es la pregunta A?",opcionA: true,pre2A: "opcion A", opcionB: false,pre2A: "opcion B", opcionC: false,pre2A: "opcion C", opcionD: false,pre2A: "opcion D" },
	preg3A={pregunta:"esta es la pregunta A?",opcionA: true,pre3A: "opcion A", opcionB: false,pre3A: "opcion B", opcionC: false,pre3A: "opcion C", opcionD: false,pre3A: "opcion D" },
	preg4A={pregunta:"esta es la pregunta A?",opcionA: true,pre4A: "opcion A", opcionB: false,pre4A: "opcion B", opcionC: false,pre4A: "opcion C", opcionD: false,pre4A: "opcion D" },
	preg5A={pregunta:"esta es la pregunta A?",opcionA: true,pre5A: "opcion A", opcionB: false,pre5A: "opcion B", opcionC: false,pre5A: "opcion C", opcionD: false,pre5A: "opcion D" };

const obtenerPreguntas= (categoría)=>{
	categorías={  //lista de categorias segun su nivel de pregunta
		categoríaA:[preg1A,preg2A,preg3A,preg4A,preg5A],
		categoríaB:[preg1B={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg2B={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg3B={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg4B={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg5B={opcionA: true, opcionB: false, opcionC: false, opcionD: false }],
		categoríaC:[preg1C={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg2C={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg3C={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg4C={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg5C={opcionA: true, opcionB: false, opcionC: false, opcionD: false }],
		categoríaD:[preg1D={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg2D={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg3D={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg4D={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg5D={opcionA: true, opcionB: false, opcionC: false, opcionD: false }],
		categoríaE:[preg1E={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg2E={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg3E={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg4E={opcionA: true, opcionB: false, opcionC: false, opcionD: false },preg5E={opcionA: true, opcionB: false, opcionC: false, opcionD: false }]
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
/*--------------------------------------------------------------------------------*/


// for (i = 1; i < 6; i++) {  //recorro todos los niveles
//   orden = orden.sort(function() {return Math.random() - 0.5});
let i=3;
  console.log("nivel ",i);
  orden.forEach(function(a) {respuesta=eligeCategoria(a,i);console.log(respuesta);}); //obtengo las preguntas de todas las categorias segun el orden ya elegido por sistema
// } 

// respuesta=eligeCategoria(1,1);console.log(respuesta);


let empersonas = {
	firstName:'rubius',
	lastName:'miguel',
	otrapersonaA:{firstNam:'yo',lastNam:'si'},
	otrapersonaB:{firstNam:'tu',lastNam:'no'}
};

console.log(empersonas.firstName,empersonas.otrapersonaB.firstNam,empersonas.otrapersonaA.lastNam);


/*3. El Jugador selecciona una opción de las 4 opciones que tiene, si pierde se finaliza el
juego si gana continua a la siguiente ronda.*/


/*4. La siguiente ronda selecciona una pregunta de un grado de complejidad mayor según
la categoría. Hace el mismo comportamiento del ítem 4.*/

/*5. Si llega a la ronda 5 y pasa, entonces gana el juego, el premio mayor debería estar en
la última ronda.*/