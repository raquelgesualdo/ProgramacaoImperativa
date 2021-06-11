let lista = ["leite","cafe","achocolatado"];

//join
console.log("join - transforma todo o conteúdo da array em string, default retorna com vírgula mas podemos colocar o que preferirmos.");
console.log(lista.join(" - "));

//pop
console.log("pop - retira o último item do array.");
console.log(lista.pop());

//push
console.log("push - adiciona itens em um array, sempre no final da array.");
lista.push("refrigerante");
console.log(lista);

//shift
console.log("shift - retira o primeiro item do array.");
console.log(lista.shift());

//unshift
console.log("unshift - insere o valor no início da array.");
lista.unshift("arroz");
console.log(lista);