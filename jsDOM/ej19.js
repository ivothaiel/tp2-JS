const button = document.querySelector("#submitBtn");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const idInput = document.querySelector("#idNumber");


//creamos el evento
button.addEventListener("click", () => {
  alert(`Los datos ingresados son:\nNombre: ${nameInput.value}\nApellido: ${surnameInput.value}\nLibreta Universitaria: ${idInput.value}`);
});