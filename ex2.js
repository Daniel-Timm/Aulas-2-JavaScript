// 2. Somando valores de um vetor
// Crie um vetor com 5 números e mostre no console a soma total desses
// valores.

let numeros = [1, 2, 3, 4, 5]
 let soma = 0;

for (let i = 0; i < numeros.length; i++) {
   soma += numeros [i];
 }

console.log("Soma total:", soma);