class CajaFuerte {
    #codigo;   // propiedad privada

    constructor(propietario, codigoInicial) {
        this.propietario = propietario;   // propiedad pública
        this.#codigo = codigoInicial;
    }

    verCodigo() {
        return this.#codigo;
    }

    cambiarCodigo(nuevoCodigo) {
        // Validar que tenga exactamente 4 dígitos
        if (String(nuevoCodigo).length === 4) {
            this.#codigo = nuevoCodigo;
            console.log(`Código cambiado correctamente a ${nuevoCodigo}`);
            return true;
        } else {
            console.log("Error: el código debe tener 4 dígitos.");
            return false;
        }
    }
}



// Crear el objeto
const miCaja = new CajaFuerte("Ana", 1234);
console.log(`Propietario: ${miCaja.propietario}`);

// Ver el código
console.log(`Código actual: ${miCaja.verCodigo()}`);

// Cambiar el código
miCaja.cambiarCodigo(5678);
console.log(`Código actual: ${miCaja.verCodigo()}`);

// Intento con un código inválido
miCaja.cambiarCodigo(99);
console.log(`Código actual: ${miCaja.verCodigo()}`);

// Intentar acceder directamente a la propiedad privada
try {
    console.log(miCaja.codigo);   // undefined: no existe como propiedad pública
    console.log(eval("miCaja.#codigo"));   // lanza SyntaxError
} catch (error) {
    console.log(`No se puede acceder: ${error.name}`);
}