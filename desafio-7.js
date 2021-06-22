// Transformando Funções
console.log('Exercicio Transformando Funções')

function print(mensagem){
      console.log(mensagem)
}
    print("Olá, bom dia")

let sms = () => 'Olá, bom dia Matheus'
console.log(sms())

function soma(n1, n2){
      return n1 + n2
    }
    console.log(soma(10, 10))

let adicao = (n1, n2) => (n1+n2)
console.log(adicao(50,50));

// Tercerizando Funções - callback - função passada como parametro para outra
console.log('Exercicio Tercerizando Funções')

let imprimir=_=>console.log('Olá mundo!!')
setTimeout(imprimir, 10000)
imprimir()


const dobrar = numero =>{
    return numero*numero
}

console.log(dobrar(3))

// const status = function acaoCarro(){
//     console.log('O carro está: '+ status);
// }

// function acaoCarro(status){
//     console.log('O carro está: '+ status);
// }

// function andando(status, acaoCarro){
//     status<='andando'
//     console.log(acaoCarro)}

// function parado(status){
//     status<='parado'}
        


// // let acaoCarro=statusCarro=>{
// //     if (statusCarro='andando'){
// //         console.log('Carro está andando!')
// //     }
// //     else{
//         console.log('Carro está parado!')
//     }
// } 
// let andando=(statusCarro)=>'andando'
// let parado=(statusCarro)=>'parado'

// acaoCarro(andando)
// acaoCarro(parado)
