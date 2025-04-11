import { actualizaTexto } from "./utils";

//seleccionamos los elementos
const button = document.querySelector("#changebutton");
const parrafo = document.querySelector("#texto");


//agregamos el evento del click
button.addEventListener("click", () => {
    //actualizamos el texto
    actualizaTexto(parrafo, "Este texto ha sido actualizado");
});  //cerramos el evento del click