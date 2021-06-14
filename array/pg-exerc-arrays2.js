// Acesse elementos específicos de um array.
let objetos=["chaves", "carteira", "celular", "oculos"];
console.log(objetos[2]);
// Adicione elementos a um array.
objetos.push("agua");
console.log(objetos);
// Exclua elementos de um array.
objetos.shift("chaves");
console.log(objetos);

/* E os micro desafios  1, 3, 4 e 5. */
let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"] //1
console.log(filmes[1]); //1
console.log(filmes);

let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"] //3
let cartoonsremovidos = cartoons.pop();
console.log(cartoonsremovidos); //5
console.log(cartoons);
filmes.push(cartoons[0],cartoons[1],cartoons[2],cartoons[3]); //4
console.log(filmes);