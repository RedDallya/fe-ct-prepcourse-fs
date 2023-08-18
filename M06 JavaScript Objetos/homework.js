/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
  const gato = {
   nombre: nombre,
   edad: edad,
   meow: function(){
      return "Meow!";
   }
  };
  return gato;
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   const usuario = {
      nombre: nombre,
      email: email,
      password: password
   };
   
   return usuario;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   return objeto;
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   return objetoUsuario.hasOwnProperty('email') && objetoUsuario.email !== null;
}


function tienePropiedad(objeto, propiedad) {
   return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(objetoUsuario, password) {
   return objetoUsuario.password === password;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   for (let usuario of objetoMuchosUsuarios) {
      usuario.esPremium = true;
   }
   return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   let totalLikes = 0;
   for (let post of objetoUsuario.posts) {
      totalLikes += post.likes;
   }
   return totalLikes;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   objetoProducto.calcularPrecioDescuento = function() {
      const descuento = this.precio * this.porcentajeDeDescuento;
      return this.precio - descuento;
   };
   return objetoProducto;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
