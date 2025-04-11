import { formatearAlerta } from "./utils.js";


//seleccionamos elementos
const boton = document.querySelector("#enviar");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const libretaInput = document.querySelector("#libreta");

//agregamos el evento click
boton.addEventListener("click", () => {
    const mensaje = formatearAlerta(nombreInput.value, apellidoInput.value, libretaInput.value);
    alert(mensaje);
}); //cerramos el evento click