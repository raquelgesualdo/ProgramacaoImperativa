/*Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).
Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.
*/

function Restaurante(nome, cardapio) {
    this.nome = nome;
    this.cardapio = cardapio;
};

let entrada={
    nome: "Cucina Italiana",
    cardapio: ["Ravioli de Ricota", " Nhoque", " Fettuccine", " Ossobuco ao Forno."],
    boasVindas: function () {
        return "Seja bem vindo à " + this.nome + ". Qual sua preferência? Observe nosso cardápio: " + this.cardapio; 
    }
}

console.log(entrada.boasVindas());