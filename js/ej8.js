const calcularMayor = (num1, num2) =>{
    if (num1 > num2){
        alert(`${num1} es mayor que ${num2}`);
    }else if (num2 > num1){
        alert(`${num2} es mayor que ${num1}`);
    }else{
        alert(`Los números son iguales`);
        } 
}

calcularMayor(10, 20);
calcularMayor(20, 10);
calcularMayor(10, 10);