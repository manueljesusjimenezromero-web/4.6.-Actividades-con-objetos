
//Clase vehiculo
class vehicle {
    //Constructor
    constructor(name) {
        this.name = name;
    }
    //Metodo move
    move() {
        console.log(`${this.name} se está moviendo`);
    }

}
//Clase car que hereda de vehiculo
class car extends vehicle {
    //Constructor de la clase hija
    constructor(name, model) {
        super(name);
        this.model = model;
    }
    //Sobreescribimos el metodo move de la clase padre
    move() {
        console.log(`${this.name} is Rolling out!`);
    }
    //Metodo info que muestra los datos del car
    info(){
        console.log(`Car name: ${this.name}, Model: ${this.model}`);
    }
}

var myCar = new car("Toyota", "Corolla");
myCar.move();
myCar.info();