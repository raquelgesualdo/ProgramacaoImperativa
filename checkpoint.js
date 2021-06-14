//console.log (2==='2');
//console.log (!true);
//console.log (2>2);
//console.log(2!=='2');
//console.log('a'/2);

//Com base no código abaixo, escolha a alternativa
//correta para os valores de saída das variáveis
//de memória: num1, num2 e num3 respectivamente: 

/*let num1=10;
let num2=20;
const num3=100;
num1+=num3;
num2%=5;
num2*=num3;
num1++;
num2--;
console.log('num1=' ,num1);
console.log('num2=' ,num2);
console.log('num3=' ,num3);
*/

/*
Suponha que numa variável de nome salario seja 
atribuído o valor 6000.00. Utilizando-se o if 
ternário reproduza a seguinte situação: Se o 
salario for maior ou igual a 5000.00 o funcionário
terá um aumento de 5%, caso contrário o aumento
será de 10%. Assinale a alternativa INCORRETA
para o cálculo do novo salário. */

//let salario=6000.00;
//salario>=5000.00 ? salario+=salario*0.05 : salario+=salario*0.1;
//(salario>=5000.00 ? salario=salario+salario*0.05 : salario=salario+salario*0.1);
//(salario<5000.00 ? salario+=salario*0.1 : salario+=salario*0.05);
//(salario<5000.00 ? salario+=salario*0.05 : salario+=salario*0.1);
//(salario>=5000.00 ? salario*=1.05 : salario*=1.1);
//console.log(salario);

//let frutas=["Banana","Maçã","Pêra","Uva","Mamão","Laranja","Tangerina","Caqui"];
//frutas.push("Morango","Melancia");
//console.log(frutas);
//console.log(frutas.unshift("Caju"));

/*
function calcular (numA, numB, operacao)
{
if (operacao=='+'){
    return numA+numB;}
if (operacao=='-'){
    return numA-numB;}
if (operacao=='*'){
    return numA*numB;}
if (operacao=='/' && numB!=0){
    return numA/numB;}
else {
    return 'Impossível dividir!';}
}
let resultado = calcular('2',5,'+');
console.log('Resultado= '+resultado);

*/

//for (i=1; i<10; i++) { console.log(i+'- CTD Certified Tech Developer');}
//for (i=0; i>10; i++) { console.log(i+'- CTD Certified Tech Developer');}
//for (i=1; i=10; i++) { console.log(i+'- CTD Certified Tech Developer');}
//for (i=0; i<=10; i++) { console.log('CTD Certified Tech Developer');}
//for (i=1; i<=10; i++) { console.log(i+'- CTD Certified Tech Developer');}

//for (i=1000; i<1000; i++) { console.log(i);}
//for (i=1; i<=1000; i--) { console.log(i);}
//for (i=1000; i>=100; i-=100) { console.log(i);}
//for (i=100; i<1000; i++) { console.log(i);}
//for (i=1000; i>100; i=i-100) { console.log(i);}

let resta=0;
for (i=5; i>=3; i--){
    resta=i+1;
    console.log(i+' patinhos foram passear, além das montanhas para brincar, a mamãe gritou "Quá, quá, quá, quá", mas só ' + resta + ' patinhos voltara de lá;');
}