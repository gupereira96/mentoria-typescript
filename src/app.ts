//console.log('Arquivo de testes. Pode mexer nele como quiser.')

//Desafio 1
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";


//primeira forma 
let employee = {
    code: 10,
    name: 'John'
}

console.log(employee.code);
console.log(employee.name);

//segunda forma (utilizando uma interface)
interface employee {
    code: number,
    name: string
}

const gustavo: employee = {
    code: 10,
    name: 'Gustavo'
}

//terceira forma, utilizando um objeto e tipando uma interface nesse mesmo objeto
const rafael = {} as employee;
rafael.code = 20;
rafael.name = 'Rafael';


// Desafio 2
// Como podemos melhorar o esse código usando TS? 

//utilizando uma interface
interface People {
    nome: string,
    idade: number,
    profissao: string
}

let pessoa1 = {} as People;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {} as People;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3: People = {
    nome: "laura",
    // idade: "32",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: People = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}


// Desafio 3
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

//require lite-server --> npm install lite-server

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');


let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
    limparSaldo();
});
