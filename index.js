//Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
let carro = {
    marca: "Toyota",
    modelo: "CHR",
    año: 2021,
    color: "gris",
    puertas: 5,
    motor: {                          //objeto anidado.
        tipo: "híbrido",
        potencia: "115 CV"
    }
}
//Crear una función que devuelva la marca del carro.
function conocer_marca(carro) {
return carro.marca;
}
console.log(conocer_marca(carro));
//window.print(conocer_marca(carro));      Imprimir documento actual
document.write(conocer_marca(carro));

//Crear una función que devuelva la cantidad de puertas que tiene el carro.
function cantidad_puertas(carro) {
    return carro.puertas;
}
console.log(cantidad_puertas(carro));
document.write(cantidad_puertas(carro));

//Crear una función que devuelva un atributo del objeto anidado.
function conocer_potencia(carro) {
    return carro.motor.potencia;
}
console.log(conocer_potencia(carro));
document.write(conocer_potencia(carro));

// Crear un array de 10 números //Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const imprimir_numeros = function(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
imprimir_numeros(numeros);

//Crear una función que añada un número al array
const añadir_numero = function(array, numero) {
    array.push(numero);
};
añadir_numero(numeros, 11);
console.log(numeros);

//Crear una función que elimine los números pares de ese array.
const eliminar_pares = function(array) {
    return array.filter(numero => numero % 2 !== 0);
};
numeros = eliminar_pares(numeros);
console.log(numeros);

//Crear una función que devuelva el número mayor de un array.
const obtener_mayor = function(array) {
    return Math.max(...array);
};

let mayor = obtener_mayor(numeros);
console.log(mayor);

//Crear una función que devuelva el número menor de un array.
const obtener_menor = function(array) {
    return Math.min(...array);
}
let menor = obtener_menor(numeros);
console.log(menor);

//Crear un función que convierta en minúsculas todas las letras de un texto.
function convertir_minusculas(texto) {
    return texto.toLowerCase();
}
let texto = "Primeros Pasos en JavaScript";
console.log(convertir_minusculas(texto)); 

//Crear una función que convierta en mayúsculas todas las letras de un texto.
function convertir_mayusculas(texto) {
    return texto.toUpperCase();
}
console.log(convertir_mayusculas(texto));

//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.
function convertir_primera_Letra_mayusculas(array) {
    return array.map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1));
}

let nombres = ["marta", "helena", "tania", "ana"];
console.log(convertir_primera_Letra_mayusculas(nombres));
