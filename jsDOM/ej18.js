//seleccionamos los elementos por el id
const button = document.querySelector("#changebutton");
const parrafo = document.querySelector("#text");

//creamos el evento con la funcion flecha
button.addEventListener("click", () =>{
    parrafo.textContent = "¡Hola! Soy un parrafo nuevo";
});
