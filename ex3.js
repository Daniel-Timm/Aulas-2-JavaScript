let numeros = [1, 2, 3, 4, 5]; 


let maior = numeros[0]; 
let menor = numeros[0]; 



for (let i = 1; i < numeros.length; i++) {
   
    if (numeros[i] > maior) {
        maior = numeros[i]; 
    }

    
    if (numeros[i] < menor) {
        menor = numeros[i]; 
    }
}

console.log(`O maior valor contido no vetor é: ${maior}`);
console.log(`O menor valor contido no vetor é: ${menor}`);

