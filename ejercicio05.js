const invertirCadena = (cadena) => {
    let resultado = "";  // Variable para almacenar la cadena invertida

    // Recorrer la cadena desde el último carácter hasta el primero
    
    for (let i = cadena.length - 1; i >= 0; i--) {
        resultado += cadena[i];  // Añadir cada carácter al resultado
    }

    return resultado;  // Devolver la cadena invertida
}

// Ejemplos de uso:
console.log(invertirCadena("Hola"));         // Salida: "aloH"
console.log(invertirCadena("JavaScript"));   // Salida: "tpircSavaJ"
console.log(invertirCadena(""));             // Salida: ""
