const paises = document.querySelector("#paises");
const capitales = document.querySelector("#capitales")

//creamos el evento
paises.addEventListener("change", () =>{ //SE VA A ACTIVAR CUANDO CAMBIA EL PAIS
    const pais = paises.value;
    const capitalMap = { //ACA SE ASIGNAN LOS PAISES A LOS CAPITALES
        Argentina: "Buenos Aires",
        Brasil: "Brasilia",
        Chile: "Santiago",
        Colombia: "Bogotá",
        Mexico : "Ciudad de México",
        Peru: "Lima",
    };
    capitales.value = capitalMap[pais] || "No hay capital para este pais"; //SE MUESTRA LA CAPITAL DEL PAIS SELECCIONADO 
    console.log(`País: ${pais}`)
    console.log(`Capital: ${capitales.value}`);
});