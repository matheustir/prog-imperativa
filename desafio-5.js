// Lista de compras
console.log('Exercicio Lista de Compras')
let minhaLista = ['Banana', 'Cebola', 'Alho']
console.log('Esses são os '+ minhaLista.length +' itens da lista atualmente: '+minhaLista)

// Push
minhaLista.push('Arroz', 'Feijão')
console.log('Esse é o resultado do PUSH, que adiciona itens ao final da lista')
console.log('Esses são os '+ minhaLista.length +' itens da lista atualmente: '+minhaLista)

// Pop
minhaLista.pop()
console.log('Esse é o resultado do POP, que remove o último item da lista')
console.log('Esses são os '+ minhaLista.length +' itens da lista atualmente: '+minhaLista)

// Shift
minhaLista.shift()
console.log('Esse é o resultado do SHIFT, que remove o primeiro item da lista')
console.log('Esses são os '+ minhaLista.length +' itens da lista atualmente: '+minhaLista)

// Unshift
minhaLista.unshift('Chocolate', 'Melão')
console.log('Esse é o resultado do UNSHIFT, que adiciona itens no início da lista')
console.log('Esses são os '+ minhaLista.length +' itens da lista atualmente: '+minhaLista)

// Join
let separadosPorTraco = minhaLista.join(' - ')
console.log('Esse é o resultado do JOIN, que altera o separador dos itens da lista')
console.log('Esses são os '+ minhaLista.length +' itens da lista atualmente: '+separadosPorTraco)


