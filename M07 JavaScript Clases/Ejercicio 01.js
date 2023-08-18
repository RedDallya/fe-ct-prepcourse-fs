/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   class Usuario {
      constructor(usuario, nombre, email, password) {
         this.usuario = usuario;
         this.nombre = nombre;
         this.email = email;
         this.password = password;
      }
      
      saludar() {
         return `Hola, mi nombre es ${this.nombre}`;
      }
   }

   return Usuario;
}


function agregarMetodoPrototype(Usuario) {
   Usuario.prototype.saludar = function() {
      return "Hello World!";
   };
}


function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   String.prototype.reverse = function() {
      return this.split('').reverse().join('');
   };
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
