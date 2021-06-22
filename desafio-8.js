// Meu cardápio
console.log('Exercicio Meu cardápio')
let carro = {
    placa: 'xxxxx',
    nome: 'ssss'
};
console.log(carro.placa)
console.log(carro.nome)

function Restaurante(nome, cardapio, saudacao){
    this.nome = nome;
    this.cardapio = cardapio;
    this.saudacao = saudacao;
};



let meuRestaurante = new Restaurante('Matheus Burguer', ['X-Tudo', 'X-Egg', 'X-Salada'], entrada());

// function entrada(saudacao){
//     return saudacao=('Esse é o '+meuRestaurante.nome+'. E esse é o nosso cardápio '+meuRestaurante.cardapio)
// ;}

console.log(meuRestaurante.saudacao)



// Ver número
console.log('Exercicio Ver número')