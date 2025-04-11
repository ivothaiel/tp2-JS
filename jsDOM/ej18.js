import { actualizarTexto } from "./utils.js";

//seleccionamos los elementos

const boton = document.querySelector("#botonCambiar");
const parrafo = document.querySelector("#texto");

//agregar evento de clic
boton.addEventListener("click", () => {
    actualizarTexto(parrafo, "Hola, soy el nuevo texto");
}); 