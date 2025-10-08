let numeros = [2, 10 , 3 , 7 , 80 , 13 , 67 , 88 , 99 , 100]
let pares = 0;

for (let i = 0; i < numeros.length; i++){
    if (numeros [i] % 2 == 0) {
        pares++;
    }
}
console.log("Quantidade de números pares:", pares);