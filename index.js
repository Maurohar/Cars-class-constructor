//vamos a crear una clase constructora.

class Autos {
  //podemos crear varios parametros dentro de nuestra clase constructora.
  //creamos 4 parametros para definir nuestro objeto auto.
  constructor(marca, año, modelo, precio) {
    this.marca = marca;
    this.año = año;
    this.modelo = modelo;
    this.precio = precio;
  }
  //creamos un metodo llamado monstrarDATOS concatenando this.object
  monstrarDatos() {
    console.log(
      `Marca: ${this.marca}, Año:${this.año}, Modelo:${this.modelo}, Precio:${this.precio}`
    );
  }
}

//instanciamos 4 NEW OBJECTS con sus respectivos parametros.
const autos = [
  //creamos 4 objectsmodels con sus respectivos parametros.
  new Autos("Toyota", 2020, "Corolla", 20000),
  new Autos("Chevrolet", 2019, "Camaro", 30000),
  new Autos("Ford", 2018, "Mustang", 40000),
  new Autos("Nissan", 2017, "Sentra", 50000),
];
//dentro de nuestro array de objetos autos, vamos a recorrer cada uno de los objetos

autos.forEach((auto) => auto.monstrarDatos());
