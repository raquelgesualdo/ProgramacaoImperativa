//função declarada
function darOi(){
    console.log("Olá, tudo bem?");
}
darOi()

//função expressa
//let somar = function(){
    //console.log(1 + 1);

let somar = function(numA, numB){
    return numA + numB;

};

somar(10, 20);

let resultado = somar(1, 2);
console.log(resultado);

