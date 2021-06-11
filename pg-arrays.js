// array - coleção de dados ordenados.
let pessoa = ["Larissa", 9, 1.45, "Larissa", ["Pão de Queijo", "Chocolate"]];
console.log(pessoa[0]);
// retorna a primeira posição em um array, pois inicia sempre do 0.
console.log(pessoa.length);
// retorna o tamanho (número de itens) dentro da array.

// push - adiciona itens em um array, sempre no final da array.
pessoa.push("Inteligente","Carinhosa");
console.log(pessoa)

// pop - retira o último item do array.
// se o último item for um array como neste exemplo, os dois últimos itens serão retirados.
pessoa.pop();
let oUltimo = pessoa.pop();
console.log(oUltimo);

// unshift - insere o valor no início da array.
pessoa.unshift("linda");
console.log(pessoa);

// shift - retira o primeiro item do array.
pessoa.shift();
console.log(pessoa);

// indexOf - procura o conteúdo no array e retorna em qual posição ele está.
// se o conteúdo não existir retorna -1 indicando que não foi encontrado.
console.log(pessoa.indexOf("Larissa"));

// lastIndexOf - procura informações repetidas e retorna a posição da última ocorrência encontrada.
console.log(pessoa.lastIndexOf("Larissa"));

// join - transforma todo o conteúdo da array em string, default retorna com vírgula mas podemos colocar o que preferirmos.
console.log(pessoa.join(" - "));

//includes - similar ao indexOf, procura o conteúdo no array e retorna um booleano.
console.log(pessoa.includes("Teste"));
