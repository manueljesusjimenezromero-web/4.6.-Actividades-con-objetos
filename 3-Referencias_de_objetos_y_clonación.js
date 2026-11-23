var usuario1 = {
    nombre:"Juan",
    edad:20,
    email:"juanit@ejemplo.com"
};
// Asignación por referencia
var usuario2 = usuario1; 

console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);

// Modificar una propiedad de usuario2
usuario2.edad = 25;

//Después de modificar la edad de usuario2
console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);


var clon = Object.assign({}, usuario1);
// modificamos SOLO el clon
clon.nombre = "Carlos";    

// Tras clonar y modificar el clon
console.log("usuario1:", usuario1);
console.log("clon:", clon);
