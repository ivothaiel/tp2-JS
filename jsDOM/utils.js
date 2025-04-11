
//para actualizar el texto
export const actualizaTexto = (elemento, nuevoTexto) => {
    elemento.textContent = nuevoTexto;}


    //para agregar un evento
export const alternarClase = (elemento, clase, condicion) => {
    if (condicion) {
        elemento.classList.add(clase);
        } else {
         elemento.classList.remove(clase);
         }
};

//obtener un elemento random de un array
export const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};


//mostrar mensaje
export const mostrarMensaje = (mensaje) => {
    console.log(mensaje);
};

//esta funcion devuelve un objeto con la informacion de un elemento 
export const actualizarDesplegable = (desplegable, valor) =>{
    desplegable.value = valor;
}

//capitales de paises en un mapping
export const capitalMap = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Colombia: "Bogota",
    Mexico : "Ciudad de Mexico",
    Peru: "Lima"
};
    