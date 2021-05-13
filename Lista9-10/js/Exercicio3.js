var ValorT;
var desconto;
var porcentagem;

ValorT = prompt("Digite o valor total das suas compras: ");

if(ValorT <= 199){
    porcentagem = 5;
    desconto = (ValorT - ((ValorT / 100) * 5));
}

else if(ValorT >= 200 & ValorT <= 499){
    porcentagem = 8;
    desconto = (ValorT - ((ValorT / 100) * 8));
}

else{
    porcentagem = 10;
    desconto = (ValorT - ((ValorT / 100) * 10));
}

alert("Em sua compra de " + ValorT + " foi recebido um desconto de " + porcentagem + "%, tendo um total final de " + desconto);