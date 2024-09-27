const generarFibonacci = (n) => {
    let resultado = [];
    let a = 0, b = 1;

    // Agregar los dos primeros números de la serie de Fibonacci
    
    resultado.push(a);
    if (n > 1) {
        resultado.push(b);
    }

    // Generar los números de la serie utilizando un ciclo

    for (let i = 2; i < n; i++) {
        const siguiente = a + b;
        resultado.push(siguiente);
        a = b;
        b = siguiente;
    }

    return resultado;
}

// Ejemplos de uso:

console.log(generarFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(generarFibonacci(0)); // []
console.log(generarFibonacci(-5)); // []



