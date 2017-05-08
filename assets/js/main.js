function MiembroSquad(nombre, edad, hobby, hobby1, hobby2){
	this.nombre = nombre;
	this.edad = edad;
	this.hobby = hobby;
	this.hobby1 = hobby1;
	this.hobby2 = hobby2;
	this.miSquad = function(){
		return("<b>" + "Nombre: " + "</b>" + this.nombre) /*+ "<br>" + "<b>" + "Edad: " + "</b>" +
		 this.edad + "<br>" + "<b>" + "Hobbies: " + "</b>" + "<ul>" + "<li>" + this.hobby +"</li>"+ "<li>" +this.hobby1 + "</li>" + "<li>" +this.hobby2 + "</li>" +"<br>" + "</br>" + "</ul>");*/
	};

}

 var grupo = []; 
 grupo.push(new MiembroSquad("Daniela Risco", "35", "Ver peliculas", "Dormir", "Comer"));
 grupo.push(new MiembroSquad("Marcela 'Unicornio' Orellana", "31", "Andar en bici", "Ver Doramas", "Comer"));
 grupo.push(new MiembroSquad("Angela Aliaga", "32", "Jugar Donkey Kong Country", "Leer", "Escuchar Música"));
 grupo.push(new MiembroSquad("Gabriela Bravo", "28", "Ver animes", "Pintar", "Jugar Aion"));
 grupo.push(new MiembroSquad("Patricia Zavala", "28", "Cantar", "Comer", "Comer"));
 grupo.push(new MiembroSquad("Mily Rivas", "18 recién cumplidos", "Ver peliculas", "Leer", "Comer"));
 

 dany.miSquad();
 marce.miSquad();
 angy.miSquad();
 gaby.miSquad();
 paty.miSquad();
 mily.miSquad();

 mostrar(){
	("<b>" + "Nombre: " + "</b>" + this.nombre + "<br>" + "<b>" + "Edad: " + "</b>" +
		 this.edad + "<br>" + "<b>" + "Hobbies: " + "</b>" + "<ul>" + "<li>" + this.hobby +"</li>"+ "<li>" +this.hobby1 + "</li>" + "<li>" +this.hobby2 + "</li>" +"<br>" + "</br>" + "</ul>");
 } 
