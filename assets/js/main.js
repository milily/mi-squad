function MiembroSquad(nombre, edad, hobby, hobby1, hobby2){
	this.nombre = nombre;
	this.edad = edad;
	this.hobby = hobby;
	this.hobby1 = hobby1;
	this.hobby2 = hobby2;
	this.miSquad = function(){
		document.write("<b>" + "Nombre: " + "</b>" + this.nombre + "<br>" + "<b>" + "Edad: " + "</b>" +
		 this.edad + "<br>" + "<b>" + "Hobbies: " + "</b>" + "<ul>" + "<li>" + this.hobby +"</li>"+ "<li>" +this.hobby1 + "</li>" + "<li>" +this.hobby2 + "</li>" +"<br>" + "</br>" + "</ul>");
	};

}
 var dany = new MiembroSquad("Daniela Risco", "35", "Ver peliculas", "Dormir", "Comer");
 var marce = new MiembroSquad("Marcela 'Unicornio' Orellana", "31", "Andar en bici", "Ver Doramas", "Comer");
 var angy = new MiembroSquad("Angela Aliaga", "32", "Jugar Donkey Kong Country", "Leer", "Escuchar Música");
 var gaby = new MiembroSquad("Gabriela Bravo", "28", "Ver animes", "Pintar", "Jugar Aion" );
 var paty = new MiembroSquad("Patricia Zavala", "28", "Cantar", "Comer", "Comer");
 var mily = new MiembroSquad("Mily Rivas", "18 recién cumplidos", "Ver peliculas", "Leer", "Comer")
 

 dany.miSquad();
 marce.miSquad();
 angy.miSquad();
 gaby.miSquad();
 paty.miSquad();
 mily.miSquad();