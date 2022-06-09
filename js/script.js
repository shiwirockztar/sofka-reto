console.log("start project");
/*1. Precondiciones: Debe de tener 25 preguntas (5 preguntas por categorías) para 5
rondas, cada categoría tiene una complejidad o nivel de dificultad, cada ronda debe
asignarle un premio que el jugador va a ganar, el premio puede ser puntos o dinero.*/
let preg1A={pregunta:"esta es la pregunta 1 A?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg2A={pregunta:"esta es la pregunta 2 A?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg3A={pregunta:"esta es la pregunta 3 A?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg4A={pregunta:"esta es la pregunta 4 A?",opciones:{A: true,B: false,C: false,D: true},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},
	preg5A={pregunta:"esta es la pregunta 5 A?",opciones:{A: true,B: false,C: false,D: true},respuestas:{A: "opcion A", B: "opcion B", C: "opcion C", D: "opcion D" }},

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
	return rta[nivel]; //regresa la pregunta
}

/* --------------- aqui doy el orden de las categorías por nivel --------------- */
let orden = [1,2,3,4,5];
/*--------------------------------------------------------------------------------*/
let historial=[];
let points;

for (i = 1; i < 6; i++) {  //recorro todos los niveles
  orden = orden.sort(function() {return Math.random() - 0.5});
  console.log("nivel ",i);
  // orden.forEach(function(a) {respuesta=eligeCategoria(a,i);console.log(respuesta);}); //obtengo las preguntas de todas las categorias segun el orden ya elegido por sistema
  orden.forEach(function(a) {historial.push(a);});
} 


/*3. El Jugador selecciona una opción de las 4 opciones que tiene, si pierde se finaliza el
juego si gana continua a la siguiente ronda.*/

function dinamic(objeto,n) {

		let boton=document.createElement("div");
		boton.setAttribute("class","boton");

		let opA=document.createElement("a");
		opA.innerHTML=objeto.respuestas.A;
		opA.setAttribute('onclick', "decision("+objeto.opciones.A+")"); 
		boton.appendChild(opA);


		let opB=document.createElement("a");
		opB.innerHTML=objeto.respuestas.B;
		opB.setAttribute('onclick', "decision("+objeto.opciones.B+")"); 
		boton.appendChild(opB);

		let opC=document.createElement("a");
		opC.innerHTML=objeto.respuestas.C;
		opC.setAttribute('onclick', "decision("+objeto.opciones.C+")"); 
		boton.appendChild(opC);


		let opD=document.createElement("a");
		opD.innerHTML=objeto.respuestas.D;
		opD.setAttribute('onclick', "decision("+objeto.opciones.D+")"); 
		boton.appendChild(opD);



    let pregunta =document.createElement("div");
    pregunta.setAttribute("class","pregunta");

    let h3=document.createElement("h3");
    h3.innerHTML=objeto.pregunta;
    pregunta.appendChild(h3);


    let question =document.createElement("div");
    question.setAttribute("id",`Question${n}`);
    question.appendChild(pregunta);
    question.appendChild(boton);


    let contenido=document.querySelector("#contenido")     //forma directa de pasar elementos
    contenido.appendChild(question);

	const puntajes=[0,100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,
	1000000,2000000,3000000,5000000,10000000,20000000,40000000,80000000,160000000,320000000,640000000];

    let h4=document.createElement("h4");
		h4.setAttribute("id",`${n}`);
		h4.innerHTML=`el premio actual es de : ${puntajes[n]}`;points=puntajes[n];
		let puntos=document.querySelector("#puntajes")     //forma directa de pasar elementos
		puntos.appendChild(h4);
}


console.log(historial);
                //https://www.youtube.com/watch?v=KJbLiV6Y9sY&ab_channel=BastianAndresWeb
let datos=(k)=>{
	let a=historial[k];
	let n=1;
	if (k>4 && k<=9) {n=2;}
	if (k>9 && k<=14) {n=3;}
	if (k>14 && k<=19) {n=4;}
	if (k>19) {n=5;}
	let b=n;
	return [a,b]; //regresa datos de la categoria elegida y el nivel
}

let proceso=(x)=>{
	let data=datos(x);
	dinamic(eligeCategoria(data[0],data[1]),x);
}

//---------------------------- start----------------------------
let nombre= prompt(`Por favor introduzca su nombre`)||"player 1";

let Z=0;
proceso(Z);


/*4. La siguiente ronda selecciona una pregunta de un grado de complejidad mayor según
la categoría. Hace el mismo comportamiento del ítem 4.*/



/*5. Si llega a la ronda 5 y pasa, entonces gana el juego, el premio mayor debería estar en
la última ronda.*/




// ********************* proceso de grabar *****************
// -----archivo como objeto---
function grabacionObj() {
    let name=nombre;
    let point=points;
    return {"name":name, "puntaje":point}
}

// ****** obj *******
let save;

// -----archivo como Json---
function savePuntos(save) {
    //creamos arreglo para guardar varios puntajes
    let oldSaveObj=JSON.parse(localStorage.getItem("save"))||[];
    oldSaveObj.push(save);
    //se hace string
    let saveJson=JSON.stringify(oldSaveObj);
    localStorage.setItem("save",saveJson);
    return saveJson;
}

// // ****** JSON *****
let File;


//ejecuciones al pulsar los botones
function decision(valor) {
	if (valor==true) {	alert("Felicidades Respuesta correcta!");
	document.getElementById(`Question${Z}`).style.display = "none";	document.getElementById(`${Z}`).style.display = "none";	
	Z++;proceso(Z);
	} else{alert("Lo siento respuesta incorrecta\n Perdiste !");save=grabacionObj(); File=savePuntos(save);console.log(File); 
		setTimeout(function(){location.reload() ;},5000);} 
	}



			