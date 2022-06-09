console.log("start project");
/*1. Precondiciones: Debe de tener 25 preguntas (5 preguntas por categorías) para 5
rondas, cada categoría tiene una complejidad o nivel de dificultad, cada ronda debe
asignarle un premio que el jugador va a ganar, el premio puede ser puntos o dinero.*/
let preg1A={pregunta:"Según el refran, quien es ciego?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "La esperanza", B: "El amor", C: "El odio", D: "La envidia" }},
	preg2A={pregunta:"Uno de los libros de J. K. Rowling es Harry Potter y:",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "El arca perdida", B: "El prisionero de Azkaban", C: "La magia negra", D: "Su varita" }},
	preg3A={pregunta:"¿Qué trilogía de las películas basadas en los cómics de Marvel recaudó más dinero en taquilla?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Thor", B: "Capitán América", C: "Iron Man", D: "Wolverine" }},
	preg4A={pregunta:"¿Quién es el creador de contenido con más seguidores en la plataforma Twitch?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Rubius", B: "Auronplay", C: "Ninja", D: "Ibai" }},
	preg5A={pregunta:`Quien dirigió la película "El Padrino" en 1972?`,opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Roman Polanski", B: "Franco Zeffirelli", C: "Francis Ford Copolla", D: "Federico Fellini" }},

  preg1B={pregunta:"¿Quién era el Dios romano de la guerra?",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Ares", B: "Júpiter", C: "Marte", D: "Miércoles" }},
	preg2B={pregunta:"¿Como se llama el libro sagrado de la cultura Islámica?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Talmud", B: "Torá", C: "Corán", D: "Kojiki" }},
	preg3B={pregunta:"El origen del café proviene de...",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Etiopía", B: "Francia", C: "Egipto", D: "Indonesia" }},
	preg4B={pregunta:"¿Qué enfermedad tenía el legendario astrofísico Stephen Hawking?",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Enfermedad de Addison", B: "Progeria de Hutchinson-Gilford", C: "Esclerosis Lateral Amiotrófica", D: "Síndrome de Marfan" }},
	preg5B={pregunta:"La vara que suele llevar como cetro el Dios de la mitología romana Baco se llama:",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Tirso", B: "Talión", C: "Vareta", D: "Mástil" }},

  preg1C={pregunta:"¿Cuál es el océano más grande del mundo?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "Océano Pacífico", B: "Océano Índico", C: "Océano Antártico", D: "Océano Atlántico" }},
	preg2C={pregunta:"Cual de los siguientes países limita con Francia?",opciones:{A: false,B: false,C: false,D: true},respuestas:{A: "Holanda", B: "Suecia", C: "Dinamarca", D: "Belgica" }},
	preg3C={pregunta:"Cual es el idioma oficial de Israel?",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Japones", B: "Griego", C: "Hebreo", D: "Chino" }},
	preg4C={pregunta:"Jose Tomas Boves murio en la Batalla de:",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Carabobo", B: "Urica", C: "Mucuritas", D: "Calabozo" }},
	preg5C={pregunta:"¿Cuál es la capital de Mongolia?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Makati City", B: "Ulaanbaatar", C: "Naypyidaw", D: "Nur-Sultan" }},

  preg1D={pregunta:"En el aparato reproductor femenino se encuentran las trompas de:",opciones:{A: false,B: false,C: false,D: true},respuestas:{A: "Eustaquio", B: "Diógenes", C: "Augusto", D: "Falopio" }},
	preg2D={pregunta:"¿Cuál es el hueso mas largo del ser humano?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "falange", B: "femur", C: "radio", D: "craneo" }},
	preg3D={pregunta:"El albinismo se presenta por la carencia de:",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Calcio", B: "Pigmentación", C: "Vitamina A", D: "Oxígeno" }},
	preg4D={pregunta:"Son las membranas movibles cubiertas de piel que resguardan los ojos:",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Cejas", B: "Pupilas", C: "Parpados", D: "Anteojos" }},
	preg5D={pregunta:"¿Qué parte del cuerpo produce insulina?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "El páncreas", B: "El bazo", C: "El hígado", D: "El timo" }},

  preg1E={pregunta:"El timbal es un instrumento de",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "Percusion", B: "Viento metal", C: "Viento madera", D: "Cuerda" }},
	preg2E={pregunta:"Tecnica que describe y representa detalladamente la superficie de un terreno:",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "Topografía", B: "Serigrafía", C: "Epigrafía", D: "Holografía" }},
	preg3E={pregunta:"¿Aproximadamente, qué porcentaje de la superficie de la Tierra es agua?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "70%", B: "50%", C: "45%", D: "80%" }},
	preg4E={pregunta:`A que tipo de animales se refiere la palabra "aviario"?`,opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Peces", B: "Aves", C: "Mamíferos", D: "Moluscos" }},
	preg5E={pregunta:"Cual de estos instrumentos mide la densidad de los aceites?",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Dinamometro", B: "Micrometro", C: "oOleometro", D: "Holometro" }};


const obtenerPreguntas= (categoría)=>{
	categorías={  //lista de categorias segun su nivel de pregunta
		social:[preg1A,preg2A,preg3A,preg4A,preg5A],
		historia:[preg1B,preg2B,preg3B,preg4B,preg5B],
		geografia:[preg1C,preg2C,preg3C,preg4C,preg5C],
		anatomia:[preg1D,preg2D,preg3D,preg4D,preg5D],
		ciencia:[preg1E,preg2E,preg3E,preg4E,preg5E]	}
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
	if (n==1) {rta=obtenerPreguntas("social");}
	if (n==2) {rta=obtenerPreguntas("historia");}
	if (n==3) {rta=obtenerPreguntas("geografia");}
	if (n==4) {rta=obtenerPreguntas("anatomia");}
	if (n==5) {rta=obtenerPreguntas("ciencia");}
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

    let h2=document.createElement("h2");
    h2.innerHTML=objeto.pregunta;
    pregunta.appendChild(h2);


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
    return {"name":name, "puntaje":point} //los datos que vamos a guardar son el nombre y el puntaje
}

// ****** obj *******
let save;

// -----archivo como Json---
function savePuntos(save) {
    //creamos arreglo para guardar varios puntajes
    let oldSaveObj=JSON.parse(localStorage.getItem("save"))||[];//convertimos de Json a objeto en caso de no tener datos solo se pasara un array vacio
    oldSaveObj.push(save); //agregamos otro objeto
    //se hace string
    let saveJson=JSON.stringify(oldSaveObj); //convertimos de nuevo a Json
    localStorage.setItem("save",saveJson); //guardamos Json en local storage
    return saveJson;
}

// // ****** JSON *****
let File;


//ejecuciones al pulsar los botones
function decision(valor) {
	if (valor==true) {	alert("Felicidades Respuesta correcta!");
	document.getElementById(`Question${Z}`).style.display = "none";	document.getElementById(`${Z}`).style.display = "none";	
	Z++;proceso(Z);
	} else{alert("Lo siento respuesta incorrecta\n Perdiste !");
		setTimeout(function(){location.reload() ;},3000);} 
	}



// ********************* proceso de mostrar los records *****************
// -----archivo como Json---

function obtPuntos() {
    //creamos arreglo para guardar varios puntajes
    let data=JSON.parse(localStorage.getItem("save"))||[];
    //se hace string
    console.log("estos son los datos obtenidos ",data);

		for (var i = 0; i < data.length; i++) {
    let h4=document.createElement("h4");
					h4.innerHTML=`el usuario : ${data[i].name} con ${data[i].puntaje} puntos`;
					let puntos=document.querySelector("#guardados")     //forma directa de pasar elementos
					puntos.appendChild(h4);
		}
}

obtPuntos();

function retiro(){
	save=grabacionObj(); File=savePuntos(save);console.log(File); 
	alert("Decisdiste retirarte !");
	setTimeout(function(){location.reload() ;},3000);
}