function sumaDivisores(num) {
    // Verificar si el número es entero
    if (!Number.isInteger(num)) {
        return "El valor debe ser un número entero.";
    }

    // Tomar el valor absoluto del número
    num = Math.abs(num);
    let suma = 0;

    // Iterar sobre todos los posibles divisores
    for (let i = 1; i < num; i++) {
        // Verificar si i es un divisor de num
        if (num % i === 0) {
            suma += i; // Sumar el divisor
        }
    }

    // Devolver la suma de los divisores
    return suma;
}

// Ejemplos de uso
console.log(sumaDivisores(12));  // Output: 16 (1 + 2 + 3 + 4 + 6)
console.log(sumaDivisores(-6));  // Output: 6 (1 + 2 + 3)
console.log(sumaDivisores(1));   // Output: 0 (no tiene divisores excluyendo el propio número)
console.log(sumaDivisores(3.5)); // Output: "El valor debe ser un número entero."
