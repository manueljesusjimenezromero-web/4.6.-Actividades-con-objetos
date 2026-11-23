//Creacion del simbolo 
var id=symbol("id");
//objeto con clave oculta
var persona={
    nombre:"Ana",
    edad:28,
};
//Se añade la clave oculta al objeto
persona[id]=12345;

//For in para recorrer las claves del objeto
for(var clave in persona){
    console.log(`Clave: ${clave} - Valor: ${persona[clave]}`);
}
// El símbolo no aparece en el bucle, pero la propiedad sí existe
console.log(`id: ${empleado[id]}`);

