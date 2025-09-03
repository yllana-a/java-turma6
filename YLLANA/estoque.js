const prompt = require('prompt-sync')({ sigint: true });

let estoque = [];

//Função do menu principal

function menu() {
    console.log("          *****ESTOQUE*****          ");
    console.log("Digite um número do menu para acessar estoque: \n");
    console.log("[1] Cadastrar Produtos");
    console.log("[2] Listar produtodos");
    console.log("[3] Buscar Produtos");
    console.log("[4] Total Em Estoque");
    console.log("[0] Sair");
    
    let opcao = prompt("Escolha um número:");
    if (opcao == 1) {
        cadastrarP();
    }
}


function cadastrarP () {
    
    console.log("Cadastrar Produtos");
}

function listaP () {
    console.log("Listar Produtos");
}

function buscarNome () {
    console.log("Buscar Produto");
}

function total () {
    console.log("Total em Estoque");
}

menu();

