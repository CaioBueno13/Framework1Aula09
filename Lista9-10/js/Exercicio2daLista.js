var nome = prompt("Digite o seu nome: ");
var password = prompt("Digite agora a sua senha: ");

const validacao = [
    {name: 'JOAO', senha: 123456},
    {name: 'PAULO', senha: 'A1B2C3'},
    {name: 'MARIA', senha: 676767},
]

for(var i = 0; i < validacao.length; i++){
    if(validacao[i].name == nome && validacao[i].senha == password){
        alert("Usuário e senha validado. Bem vindo a aplicação");
    } 

    else{
        alert("Usuario e senha invalidos.");
    }
}

/*
O programa esta percorrendo o array "validacao" em busca do 
usuario e senha digitados, ele mostra que esta
validado quando encontra as informaçãoes digitadas
no array e mostrará invalido caso não sejam as mesmas
digitadas.
*/