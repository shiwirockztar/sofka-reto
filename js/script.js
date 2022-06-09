console.log("start project");
/*        -------------------------      preguntas categorial Social       -------------------------         */
let preg1S={pregunta:"Según el refran, quien es ciego?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "La esperanza", B: "El amor", C: "El odio", D: "La envidia" }},
	preg2S={pregunta:"Uno de los libros de J. K. Rowling es Harry Potter y:",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "El arca perdida", B: "El prisionero de Azkaban", C: "La magia negra", D: "Su varita" }},
	preg3S={pregunta:"¿Qué trilogía de las películas basadas en los cómics de Marvel recaudó más dinero en taquilla?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Thor", B: "Capitán América", C: "Iron Man", D: "Wolverine" }},
	preg4S={pregunta:"¿Quién es el creador de contenido con más seguidores en la plataforma Twitch?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Rubius", B: "Auronplay", C: "Ninja", D: "Ibai" }},
	preg5S={pregunta:`Quien dirigió la película "El Padrino" en 1972?`,opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Roman Polanski", B: "Franco Zeffirelli", C: "Francis Ford Copolla", D: "Federico Fellini" }},
/*        -------------------------      preguntas categorial Historia       -------------------------         */
  preg1H={pregunta:"¿Quién era el Dios romano de la guerra?",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Ares", B: "Júpiter", C: "Marte", D: "Miércoles" }},
	preg2H={pregunta:"¿Como se llama el libro sagrado de la cultura Islámica?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Talmud", B: "Torá", C: "Corán", D: "Kojiki" }},
	preg3H={pregunta:"El origen del café proviene de...",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Etiopía", B: "Francia", C: "Egipto", D: "Indonesia" }},
	preg4H={pregunta:"¿Qué enfermedad tenía el legendario astrofísico Stephen Hawking?",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Enfermedad de Addison", B: "Progeria de Hutchinson-Gilford", C: "Esclerosis Lateral Amiotrófica", D: "Síndrome de Marfan" }},
	preg5H={pregunta:"La vara que suele llevar como cetro el Dios de la mitología romana Baco se llama:",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Tirso", B: "Talión", C: "Vareta", D: "Mástil" }},
/*        -------------------------      preguntas categorial Geografia       -------------------------         */
  preg1G={pregunta:"¿Cuál es el océano más grande del mundo?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "Océano Pacífico", B: "Océano Índico", C: "Océano Antártico", D: "Océano Atlántico" }},
	preg2G={pregunta:"Cual de los siguientes países limita con Francia?",opciones:{A: false,B: false,C: false,D: true},respuestas:{A: "Holanda", B: "Suecia", C: "Dinamarca", D: "Belgica" }},
	preg3G={pregunta:"Cual es el idioma oficial de Israel?",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Japones", B: "Griego", C: "Hebreo", D: "Chino" }},
	preg4G={pregunta:"Jose Tomas Boves murio en la Batalla de:",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Carabobo", B: "Urica", C: "Mucuritas", D: "Calabozo" }},
	preg5G={pregunta:"¿Cuál es la capital de Mongolia?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Makati City", B: "Ulaanbaatar", C: "Naypyidaw", D: "Nur-Sultan" }},
/*        -------------------------      preguntas categorial Anatomia       -------------------------         */
  preg1A={pregunta:"En el aparato reproductor femenino se encuentran las trompas de:",opciones:{A: false,B: false,C: false,D: true},respuestas:{A: "Eustaquio", B: "Diógenes", C: "Augusto", D: "Falopio" }},
	preg2A={pregunta:"¿Cuál es el hueso mas largo del ser humano?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "falange", B: "femur", C: "radio", D: "craneo" }},
	preg3A={pregunta:"El albinismo se presenta por la carencia de:",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Calcio", B: "Pigmentación", C: "Vitamina A", D: "Oxígeno" }},
	preg4A={pregunta:"Son las membranas movibles cubiertas de piel que resguardan los ojos:",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Cejas", B: "Pupilas", C: "Parpados", D: "Anteojos" }},
	preg5A={pregunta:"¿Qué parte del cuerpo produce insulina?",opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "El páncreas", B: "El bazo", C: "El hígado", D: "El timo" }},
/*        -------------------------      preguntas categorial Ciencia       -------------------------         */
  preg1C={pregunta:"El timbal es un instrumento de",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "Percusion", B: "Viento metal", C: "Viento madera", D: "Cuerda" }},
	preg2C={pregunta:"Tecnica que describe y representa detalladamente la superficie de un terreno:",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "Topografía", B: "Serigrafía", C: "Epigrafía", D: "Holografía" }},
	preg3C={pregunta:"¿Aproximadamente, qué porcentaje de la superficie de la Tierra es agua?",opciones:{A: true,B: false,C: false,D: false},respuestas:{A: "70%", B: "50%", C: "45%", D: "80%" }},
	preg4C={pregunta:`A que tipo de animales se refiere la palabra "aviario"?`,opciones:{A: false,B: true,C: false,D: false},respuestas:{A: "Peces", B: "Aves", C: "Mamíferos", D: "Moluscos" }},
	preg5C={pregunta:"Cual de estos instrumentos mide la densidad de los aceites?",opciones:{A: false,B: false,C: true,D: false},respuestas:{A: "Dinamometro", B: "Micrometro", C: "oOleometro", D: "Holometro" }};


const obtenerPreguntas= (categoría)=>{
	categorías={  //lista de categorias segun su nivel de pregunta
		social:[preg1S,preg2S,preg3S,preg4S,preg5S],
		historia:[preg1H,preg2H,preg3H,preg4H,preg5H],
		geografia:[preg1G,preg2G,preg3G,preg4G,preg5G],
		anatomia:[preg1A,preg2A,preg3A,preg4A,preg5A],
		ciencia:[preg1C,preg2C,preg3C,preg4C,preg5C]	}
	if(categorías[categoría]!==undefined){return categorías[categoría];}
	else{ return false;}
}

const eligeCategoria=(n,nivel)=>{
	let rta;
	if (n==1) {rta=obtenerPreguntas("social");}
	if (n==2) {rta=obtenerPreguntas("historia");}
	if (n==3) {rta=obtenerPreguntas("geografia");}
	if (n==4) {rta=obtenerPreguntas("anatomia");}
	if (n==5) {rta=obtenerPreguntas("ciencia");}
	nivel--; //el nivel esta -1 por indice de arreglo
	return rta[nivel]; //regresa la pregunta de acuerdo al nivel elegido
}

/* --------------- aqui doy el orden de las categorías por nivel --------------- */
let orden = [1,2,3,4,5];
/*--------------------------------------------------------------------------------*/
let historial=[];


for (i = 1; i < 6; i++) {  //recorro todos los niveles
  orden = orden.sort(function() {return Math.random() - 0.5});
  console.log("nivel ",i);
  orden.forEach(function(a) {historial.push(a);});
} 

let points;
// ********************* creamos la secciones con su contenido  *****************
function dinamic(objeto,n) {
// -----el div que contendra todas las opciones como botones---
		let boton=document.createElement("div");
		boton.setAttribute("class","boton");

// opcion A
		let opA=document.createElement("a");
		opA.innerHTML=objeto.respuestas.A;
		opA.setAttribute('onclick', "decision("+objeto.opciones.A+")"); 
		boton.appendChild(opA);

// opcion B
		let opB=document.createElement("a");
		opB.innerHTML=objeto.respuestas.B;
		opB.setAttribute('onclick', "decision("+objeto.opciones.B+")"); 
		boton.appendChild(opB);

// opcion C
		let opC=document.createElement("a");
		opC.innerHTML=objeto.respuestas.C;
		opC.setAttribute('onclick', "decision("+objeto.opciones.C+")"); 
		boton.appendChild(opC);

// opcion D
		let opD=document.createElement("a");
		opD.innerHTML=objeto.respuestas.D;
		opD.setAttribute('onclick', "decision("+objeto.opciones.D+")"); 
		boton.appendChild(opD);


// -----el div que contendra las preguntas---
    let pregunta =document.createElement("div");
    pregunta.setAttribute("class","pregunta");
// la pregunta
    let h2=document.createElement("h2");
    h2.innerHTML=objeto.pregunta;
    pregunta.appendChild(h2);

// -----el div que contendra los dos contenedores de pregunta y opciones de cada n nivel---
    let question =document.createElement("div");
    question.setAttribute("id",`Question${n}`);
    question.appendChild(pregunta);
    question.appendChild(boton);

// -----el div que contendra todas las preguntas---
    let contenido=document.querySelector("#contenido")     
    contenido.appendChild(question);

// lista de premios-puntajes de las 25 preguntas
		const puntajes=[0,100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,
		1000000,2000000,3000000,5000000,10000000,20000000,40000000,80000000,160000000,320000000,640000000];

    let h4=document.createElement("h4");
		h4.setAttribute("id",`${n}`);
		h4.innerHTML=`puntos : ${puntajes[n]} pointsㅤㅤㅤㅤㅤㅤㅤㅤEsta pregunta va por ${puntajes[n+1]} points`;points=puntajes[n];
		let puntos=document.querySelector("#puntajes")     //forma directa de pasar elementos
		puntos.appendChild(h4);

bodyCategory(datos(n)[0]);

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

let Z=0; //comenzamos con la primera pregunta
proceso(Z);


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
	if(Z==24){	save=grabacionObj(); File=savePuntos(save);console.log(File);
							 alert("Felicidades has ganado!\n VICTORIA");
							 setTimeout(function(){location.reload() ;},5000);}

	if (valor==true) {	alert("Felicidades Respuesta correcta!");
											document.getElementById(`Question${Z}`).style.display = "none";//por comodidad se oculta la pregunta anterior 
											document.getElementById(`${Z}`).style.display = "none";	//por comodidad se oculta la pregunta anterior 
											Z++;proceso(Z);}//se crea siguiente pregunta
		 else{
		 	alert("Lo siento respuesta incorrecta\n Perdiste !");
			setTimeout(function(){location.reload() ;},3000);} 
	}



// ********************* proceso de mostrar los records *****************
// -----archivo como Json---

function obtPuntos() {
    //creamos arreglo para guardar los objetos
    let data=JSON.parse(localStorage.getItem("save"))||[];
    //se hace string
    console.log("estos son los datos obtenidos ",data);

		for (var i = 0; i < data.length; i++) {
    let h4=document.createElement("h4");
					h4.innerHTML=`usuario : ${data[i].name} ---- ${data[i].puntaje} puntos`;
					let puntos=document.querySelector("#guardados")     //forma directa de pasar elementos
					puntos.appendChild(h4);
		}
}

obtPuntos();//colocamos cada uno de los puntajes grabados

function retiro(){
	save=grabacionObj(); File=savePuntos(save);console.log(File); 
	alert("Decisdiste retirarte !");
	setTimeout(function(){location.reload() ;},3000);
}

function bodyCategory(i){
	// let colors=[nada,social,historia,geografia,anatomia,ciencia];
	let colors=["white","#63def2","#dcc99b","#46a9a6","#e3acac","#34b274"];
	document.body.style.backgroundColor = colors[i];
}

