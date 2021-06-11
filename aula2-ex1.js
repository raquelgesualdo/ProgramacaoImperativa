//comentário de uma linha

/* comentário em
bloco */
//memória ram é onde ficam as variáveis
//declarar  
var nome; //escopo global = entra e sai com o mesmo item armazenado.
let outroNome; //camelCase OutroNome
let $nome; //escopo global e local = pode alterar
let _nome;
let nome1;

//atribuição
nome="Adevaldo";
nome="Henrique";
console.log(nome);

if(true) {
    var idade=20; //escopo local
}

console.log(idade);

const g=9.8 //este número nunca muda por isso é constante
const pi=3.1415