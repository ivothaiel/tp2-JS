//mostramos un valor de hora y minuto y luego los convertimos a segundos

let horas = 5;
let minutos = 40;

//convertimos
let segundos = (horas * 3600) + (minutos * 60);


//mostramos antes de la conversion
console.log(`Horas: ${horas}`);
console.log(`Minutos: ${minutos}`);

//mostramos despues de la conversion
console.log(`Segundos: ${segundos}`);