// Exercício 01


let numeroInteiro01 = parseInt(prompt("Digite um número inteiro"));
let numeroInteiro02 = parseInt(prompt("Digite o segundo número inteiro"));

if(numeroInteiro01 > numeroInteiro02){
    alert( `O maior número é ${numeroInteiro01} e a diferença é: ${numeroInteiro01 - numeroInteiro02}`)
}
else if(numeroInteiro01 === numeroInteiro02) {
    alert("Os números são iguais e a diferença é zero")
}
else{ 
    alert(`o maior número é ${numeroInteiro02} e a diferença é: ${numeroInteiro02 - numeroInteiro01}`)
}


// Exercício 02

let numero01 = parseFloat(prompt("Digite um número"));
let numero02 = parseFloat(prompt("Digite um número"));

if(numero01 > numero02){

    alert(`O maior número é: ${numero01}`);
}

else if(numero01 === numero02){
    alert("Os números são iguais");
}

else{
    alert(`O maior número é ${numero02}`)
};


// Exercício 03

let seuSalario = parseFloat(prompt("qual o seu salário"));
let valorEmprestimo = parseFloat(prompt("Qual o valor do emprestimo?"));

let emprestimo30 = seuSalario * 30 /100

if(valorEmprestimo > emprestimo30){
    alert("Empréstimo não concedido");
}
else{
    alert("Empréstimo concedido")
}


// Exercício 04 

let valorDividido = parseInt(prompt("Digite um número"));
let numero3 = ((valorDividido % 3) == 0)
let numero5 = ((valorDividido % 5) == 0)
let numeroPar = ((valorDividido % 2) == 0)



if(numero3 && numero5){
    alert("número invalido")
}

else if (numero3){ 
    alert(`o número ${valorDividido} é divisivel por 3`)
}

else if(numero5){
    alert(`O número ${valorDividido} é divisivel por 5`)

}

else if(numeroPar){
    alert(`O número ${valorDividido} é par`)
}

else{
    alert("O número é impar")
}


// Exercício 05

let diaDaSemana = parseInt(prompt("Digite um número de 1 a 7"));
let domingo = diaDaSemana == 1
let segunda = diaDaSemana == 2
let terca = diaDaSemana == 3
let quarta = diaDaSemana == 4
let quinta = diaDaSemana == 5
let sexta = diaDaSemana == 6
let sabado = diaDaSemana == 7




if(domingo){
    alert("Domingo")
}

else if (segunda){
    alert("Segunda-Feira")
}

else if (terca){
    alert("Terça-feira")
}

else if (quarta){
    alert("Quarta-feira")
}

else if (quinta){
    alert("Quinta-feira")
}

else if (sexta){
    alert("Sexta-feira")
}

else if (sabado){
    alert("Sábado")
}

else{ alert("Erro.")

}



// Exercício 06

let salarioReajuste = parseFloat(prompt("Seu salário"));
let reajustePercentual = parseFloat(prompt("Reajuste do salário"))

 reajustePercentual <= 5 / 100

let calculoSalarioReajustado =  salarioReajuste + (reajustePercentual /100  * salarioReajuste);

alert(`O salário do funcionário corrigido é de: ${calculoSalarioReajustado}`);


// Exercício 07

let valorDolar = parseFloat(prompt("Quantidade de dólares"));
let cotacaoDolar = parseFloat(prompt("Valor da Cotação"))

let real = valorDolar * cotacaoDolar;

alert(` $ ${valorDolar.toFixed(2)}, é equivalente a R$ ${real.toFixed(2)}, tendo como ${cotacaoDolar.toFixed(2)} como cotação.`);


// Exercício 08 




let tipoArea = parseInt(prompt("Tipo da área"));
let tamanhoArea = parseFloat(prompt("Tamanho área"));

let resultado = 0;
let descontoTotal = 0;



if(tipoArea == 1){
resultado = tamanhoArea * 50
}

else if (tipoArea == 2){
    resultado = tamanhoArea * 100
}

else if (tipoArea == 3){
    resultado = tamanhoArea * 150
}

else if (tipoArea == 4){
    resultado = tamanhoArea * 250
}




if(tamanhoArea >= 1000 && resultado >= 750){
    descontoTotal = (resultado * 0.05) + ((resultado - 750) * 0.1)
}

else if(tamanhoArea >= 1000){
 descontoTotal = resultado * 0.05
}

else if (resultado >= 750){
    descontoTotal = (resultado - 750) * 0.1
}
console.log(resultado);
console.log(descontoTotal);

alert(`o valor a ser pago é de R$ ${resultado - descontoTotal}`)





// Exercício 09

let velocidadeVeiculo = parseFloat(prompt("Qual a velocidade"));
let tempoVeiculo = parseFloat(prompt("Qual o tempo gasto"));

let distancia = velocidadeVeiculo * tempoVeiculo

let litrosUsados = distancia / 12

alert(`Seu veículo percorreu ${distancia}km a ${velocidadeVeiculo} km/h em ${tempoVeiculo}h e consumiu ${litrosUsados.toFixed(2)}l de gasolina.` );


// Exercício 10

let valorPrestacao = parseFloat(prompt("Valor da prestação"));
let taxaPrestacao = parseFloat(prompt("Taxa da prestação"));
let tempoPrestacao = parseInt(prompt("Tempo de atraso em dias"));

tempoPrestacao >= 0;

let calculoPrestacao = valorPrestacao + (valorPrestacao * (taxaPrestacao/100)* tempoPrestacao);

if(tempoPrestacao > 0){
    alert(`Valor da prestação é de ${calculoPrestacao} reais`)
}

else if(tempoPrestacao <= 0){
    alert("Valor inválido o tempo de atraso deve ser em dias");
}