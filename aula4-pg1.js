let idade = 19;
let acesso = "";
if (idade < 16) { //condicional simples
    "Acesso proibido";
}   else if (idade >=16 && idade <=18) {
    // código a executar se a outra condição for verdadeira.
    acesso = "Acesso liberado somente com acompanhante maior de idade";
}   else { // código a executar se a condição for falsa.
    acesso = "Acesso liberado";
}