//Exercício “Métodos de arrays”
console.log('Exercicio Métodos de arrays');
//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
const numerosPares = [2,4,6,8];
const numerosImpares = numerosPares.map(elemento=>elemento+1);
console.log(numerosPares);
console.log(numerosImpares);

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
const nomes = ['Matheus', 'Maria', 'Nilo', 'Jurema', 'Maria'];
const nomesRepetidos = nomes.filter(elemento=>elemento)
console.log(nomes);
console.log(nomesRepetidos);

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
const numeros = [1,2,3,4,5,6,7,8];
const numerosFormatados = numeros.reduce((elemento)=>elemento+' - ');
console.log(numerosFormatados)


// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
const animais = ['Jacaré', 'Jabuti', 'Lontra', 'Calopsita', 'Gato'];
const idAninal = animais.forEach((elemento)=> console.log('O animal é '+elemento));
