// 1. Objeto persona con propiedades y métodos
var persona = {
    nombre: "Ana",
    edad: 28,
    trabajo: "ingeniera"
};
// 2. Acceso a propiedades del objeto
console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`); 

// 3. Modificación de propiedades del objeto
delete persona.trabajo;
persona["pais"] = "España"; 
// 4. Acceso a propiedades usando corchetes
console.log(persona);
// 5. Acceso a propiedades usando corchetes
console.log(`Edad: ${persona["edad"]}`);

