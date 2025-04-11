const edades = [23,45,2,3,14,23,24,19]


//recorremos el array para sacar el promedio
let suma = 0;
for(let i=0; i<edades.length; i++){
    suma += edades[i];
}

//calculamos su promedio
const promedio = suma /edades.length;

console.log(`Promedio de Edades: ${promedio}`);