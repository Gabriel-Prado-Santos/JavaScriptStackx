// Concatenação de arrays
let cidades = ["Joinville", "São Francisco", "Blumenau"];
let cidadeEstran = ["Nova york", "Los Angeles", "San Diego"];

let todasCidades = cidades.concat(cidadeEstran);
console.log(todasCidades);

// Removendo e substituindo Elementos com splice
let animais = ["cachorro", "gato", "esquilo", "elefante", "urso", "cavalo"];
let animaisNovos = animais.splice(3,2,  "zebra", "leão");
console.log(animais);

//Verificando condição com Estruturas de Controle
function numerosMaioresque50(){
    let numeros = [1, 2, 3, 50, 60, 70, 80, 90];
    let contador = 0;
    for(i = 0; i < numeros.length; i++){
        if (numeros[i]> 50){
            contador++;
        }
    }
    return console.log(contador); 
}
numerosMaioresque50();


// somando valores com Loop For
function somaValoresloopFoor(){
let int = [1, 2, 3, 4, 5, 6, 7, 8];
let total = 0
for(let i = 0; i < int.length; i++ ){
    total = total + int[i]; //total += int[i]
}
 return console.log(total); 
}
somaValoresloopFoor();

// somando valores com loop while
function somaValoresloopWhile(){
    let num = [1, 2, 3, 4, 5];
    let soma = 0;
    let i = 0
    while(i < num.length){
        soma += num[i];
        i++;
    }
    return console.log(soma);
}
somaValoresloopWhile();