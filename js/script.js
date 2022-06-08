console.log("start project");
/*1. Precondiciones: Debe de tener 25 preguntas (5 preguntas por categorías) para 5
rondas, cada categoría tiene una complejidad o nivel de dificultad, cada ronda debe
asignarle un premio que el jugador va a ganar, el premio puede ser puntos o dinero.*/
let preg1A={pregunta:"esta es la pregunta 1 A?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg2A={pregunta:"esta es la pregunta 2 A?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg3A={pregunta:"esta es la pregunta 3 A?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg4A={pregunta:"esta es la pregunta 4 A?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg5A={pregunta:"esta es la pregunta 5 A?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},

    preg1B={pregunta:"esta es la pregunta 1 B?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg2B={pregunta:"esta es la pregunta 2 B?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg3B={pregunta:"esta es la pregunta 3 B?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg4B={pregunta:"esta es la pregunta 4 B?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg5B={pregunta:"esta es la pregunta 5 B?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},

    preg1C={pregunta:"esta es la pregunta 1 C?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg2C={pregunta:"esta es la pregunta 2 C?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg3C={pregunta:"esta es la pregunta 3 C?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg4C={pregunta:"esta es la pregunta 4 C?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg5C={pregunta:"esta es la pregunta 5 C?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},

    preg1D={pregunta:"esta es la pregunta 1 D?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg2D={pregunta:"esta es la pregunta 2 D?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg3D={pregunta:"esta es la pregunta 3 D?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg4D={pregunta:"esta es la pregunta 4 D?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg5D={pregunta:"esta es la pregunta 5 D?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},

    preg1E={pregunta:"esta es la pregunta 1 E?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg2E={pregunta:"esta es la pregunta 2 E?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg3E={pregunta:"esta es la pregunta 3 E?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg4E={pregunta:"esta es la pregunta 4 E?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg5E={pregunta:"esta es la pregunta 5 E?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }};


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

const mostrarPregunta=(objeto)=>{
	document.write("<h3>",objeto.pregunta,"</h3><br>");
	document.write(objeto.respuestas.A," ",objeto.respuestas.B," ",objeto.respuestas.C," ",objeto.respuestas.D,"<br>");
	// let name= prompt(`Por favor introduzca su eleccion`);
	// alert("<h3>",objeto.pregunta,"</h3><br>");
}

const eligeCategoria=(n,nivel)=>{
	let rta;
	if (n==1) {rta=obtenerPreguntas("categoríaA");}
	if (n==2) {rta=obtenerPreguntas("categoríaB");}
	if (n==3) {rta=obtenerPreguntas("categoríaC");}
	if (n==4) {rta=obtenerPreguntas("categoríaD");}
	if (n==5) {rta=obtenerPreguntas("categoríaE");}
	nivel--; //el nivel esta -1 por indice de arreglo
	// mostrarPregunta(rta[nivel]);
	return rta[nivel];
}

/* --------------- aqui doy el orden de las categorías por nivel --------------- */
let orden = [1,2,3,4,5];
/*--------------------------------------------------------------------------------*/
let historial=[];

for (i = 1; i < 6; i++) {  //recorro todos los niveles
  orden = orden.sort(function() {return Math.random() - 0.5});
  console.log("nivel ",i);
  orden.forEach(function(a) {respuesta=eligeCategoria(a,i);console.log(respuesta);}); //obtengo las preguntas de todas las categorias segun el orden ya elegido por sistema
  orden.forEach(function(a) {historial.push(a);});
} 

// respuesta=eligeCategoria(1,2);console.log(respuesta);

/*3. El Jugador selecciona una opción de las 4 opciones que tiene, si pierde se finaliza el
juego si gana continua a la siguiente ronda.*/



function dinamic(playerN) {

    let div =document.createElement("div");
    div.setAttribute("class","Question");
    let h3=document.createElement("h3");
    h3.innerHTML=playerN;
    div.appendChild(h3);

    let title=document.querySelector("#container")     //forma directa de pasar elementos
    title.appendChild(div);
}

console.log(historial);

// historial.forEach(function(a){respuesta=eligeCategoria(a,1);console.log(a);});


// for (i = 1,y=0; i < 999; i++){
// for (h in historial) {

	// respuesta=eligeCategoria(historial[h],1);console.log(respuesta.pregunta);
	// dinamic(respuesta.pregunta);
	// let name= prompt(`Por favor introduzca su eleccion`);
	// if (name==y) {
	// 	respuesta=eligeCategoria(historial[h],1);console.log(respuesta.pregunta);
	// 	dinamic(respuesta.pregunta);
		// i=1000;}
let n=-1;
let juego =(k)=>{k++;respuesta=eligeCategoria(historial[k],1);
				 console.log(respuesta.pregunta);
				 dinamic(respuesta.pregunta);
				 setTimeout(function(){
    			let name= prompt(`Por favor introduzca su eleccion`);;
				},5000);
				 if (name=="y") {juego(k);}
				 else{alert("buen juego"); }
}

let ani=juego(n);

/*4. La siguiente ronda selecciona una pregunta de un grado de complejidad mayor según
la categoría. Hace el mismo comportamiento del ítem 4.*/

/*5. Si llega a la ronda 5 y pasa, entonces gana el juego, el premio mayor debería estar en
la última ronda.*/