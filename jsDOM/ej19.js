import { formatearAlerta } from "./utils.js";

const boton = document.querySelector("#enviar");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const libretaInput = document.querySelector("#libreta");


//el evento clic
boton.addEventListener("click", () => {
    const mensaje = formatearAlerta( nombreInput.value, apellidoInput.value, libretaInput.value);
    alert(mensaje);
}); // fin del evento clic