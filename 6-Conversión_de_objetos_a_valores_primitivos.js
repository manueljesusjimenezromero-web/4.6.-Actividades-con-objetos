var cuentaBancaria = {
    saldo:1000
};

function toString() {
    return "Saldo: " + this.saldo+"€";
}
// Saldo: 1000€
console.log(cuentaBancaria.toString()); 

