
var persona = {
    nombre: "Ana",
    edad: 28,
    trabajo: "ingeniera"
};

console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`); 
   
delete persona.trabajo;
persona["pais"] = "España"; 

console.log(persona);

console.log(`Edad (con corchetes): ${persona["edad"]}`);


// 1. Comprobar si existe la propiedad "nombre" usando forEach
var existeNombre = false;

Object.keys(persona).forEach(function (p) {
    if (p === "nombre") {
        existeNombre = true;
    }
});

console.log(`¿Existe la propiedad "nombre"? ${existeNombre}`);

// 2. Comprobar si existe la propiedad "apellido"
var existeApellido = false;

Object.keys(persona).forEach(function (p) {
    if (p === "apellido") {
        existeApellido = true;
    }
});

console.log(`¿Existe la propiedad "apellido"? ${existeApellido}`);

// 3. Recorrer todas las propiedades e imprimir claves y valores
Object.keys(persona).forEach(function (p) {
    console.log(`Clave: ${p} - Valor: ${persona[p]}`);
});