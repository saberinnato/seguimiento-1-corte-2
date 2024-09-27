const sumaDigitos = num => {
    
    // Convertir el número a una cadena de texto

    const numString = Math.abs(num).toString();

    // Inicializar la variable para almacenar la suma

    let suma = 0;

// Iterar sobre cada dígito de la cadena de texto

    for (let i = 0; i < numString.length; i++) {
    const digito = parseInt(numString[i]);

    // Sumar el dígito a la variable suma
    suma += digito;
    }

    // Devolver la suma de los dígitos
    return suma;
}

console.log(sumaDigitos(12345));  // Output: 15
console.log(sumaDigitos(-67));    // Output: 13
console.log(sumaDigitos(0));      // Output: 0
