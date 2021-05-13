/*var escolha;

function Calculo(){

var nota1 = document.getElementById("nota1");
var nota2 = document.getElementById("nota2");
var media;

media = (parseFloat(nota1.value * 0.40) + parseFloat(nota2.value * 0.60));

alert("A media total do aluno foi: " + media);

escolha = prompt("Deseja continuar? [SIM] ou [NAO]")

if(escolha == "SIM"){
    Calculo();
}

else{
    alert("Obrigado pelos calculos!");
}
}
*/

var escolha;
var nota1, nota2, media;

do{
    nota1 = prompt("Digite a 1º nota: ");
    nota2 = prompt("Digite a 2º nota: ");

    media = (nota1 * 0.40) + (nota2 * 0.60);

    alert("A media total do aluno é de " + media);

    escolha = prompt("Deseja continuar? [SIM] ou [NAO]");
} while(escolha != "NAO")