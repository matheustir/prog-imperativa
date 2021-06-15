// Praticando com Loops
console.log('Exercicio Praticando com Loops')

for (let contador=1; contador<=5; contador++){
    console.log('Olá Mundo '+contador);
}

// Contando números ímpares
console.log('Contando números ímpares')
for (let contador=1; contador<=10; contador++){
    let resto=(contador%2)
    if (resto!=0){
    console.log(contador);
    } 
}

// Criando uma tabuada
for (let base=1; base<=10; base++){
    console.log('Tabuada de '+base);
    for (let multiplicador=0; multiplicador<=10; multiplicador++){
        let resultado=base*multiplicador
        console.log(base+' x '+multiplicador+' = '+resultado);
    }
}


    
    

