var SomaPar = 0;
var SomaImpar = 0;
var n = 0;

for(n = 0; n <= 100; n++)

    if(n % 2 == 0){

        SomaPar = SomaPar + n;
    }

    else {

        SomaImpar = SomaImpar + n;
    }

    alert("A soma dos numeros pares é de " + SomaPar + " e dos numeros impares é de " + SomaImpar);
