//Transforme as seguintes funções em arrow functions:

// function print(mensagem){
//     console.log(mensagem)
// }

// print("Olá, bom dia")

// function soma(n1, n2){
//     return n1+n2    
// }

// console.log(soma(10, 10))

// transformando 1:
let print = mensagem => console.log(mensagem)
print("Olá, bom dia");
// transformando 2: 
let somar = (numeroA, numeroB) => console.log(numeroA+numeroB)
somar(10, 20);