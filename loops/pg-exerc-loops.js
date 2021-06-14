// 1 - Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

for(let papagaio=1;papagaio<=5;papagaio++){
    console.log("Olá mundo ");
};

/* 2 - Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. 
Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console. */

for(let impar=1;impar<=10;impar++){
    console.log(impar++);
};

// 3 - Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).

for(let i=0;i<=10;i++){
    console.log("6 x",i," = ",i*6);
};