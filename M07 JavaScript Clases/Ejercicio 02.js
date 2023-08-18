/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
   }

   detalle() {
      return {
         nombre: this.nombre,
         apellido: this.apellido,
         edad: this.edad,
         domicilio: this.domicilio
      };
   }
}


function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   const persona = new Persona(nombre, apellido, edad, domicilio);
   return persona;
}


function agregarMetodo() {
   Persona.prototype.datos = function() {
      return this.nombre + ', ' + this.edad + ' años';
   };
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
