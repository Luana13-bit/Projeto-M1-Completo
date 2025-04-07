// var / if / funçoes / for / array / prompt

// crie uma lista de compras [x]
// var listaCompras = [];

// for (var i = 0; i < 4; i++) {
//     // peça ao usuario que digite os produtos [x]
//     var produto = prompt("digite o nome de um produto para adicionar na lista");

//     // insira eles na lista criada [x]
//     listaCompras.push(produto);
// }

// // função que exibe a lista de compras para o usuario
// function exibirLista(){
//     console.log(listaCompras)
//     for (var i = 0; i < listaCompras.length; i++) {
//         // estou criando um item no html para CADA ELEMENTO/POSIÇÃO DO ARRAY
//         document.write(`<li>${listaCompras[i]}</li>`)
//     }
// }

// exibirLista()

// ------------------------------

// var / funçoes / for / array (elementos compostos) / prompt / if 

// ARRAY COM ELEMENTOS COMPOSTOS 

// var listaProdutos = ["tv", "balcao", "sofa"]
// var img = "smartv.png"
// img -> "smartv.png"
var listaProdutos = [
    // {} chave/nomeVariavel: valor
        { img: "smartv.png", titulo: "tv", descricao: "tv 50 polegas, samsung smartv luz de led", preco: 2000 },
        { img: "smartv.png", titulo: "tv led", descricao: "tv 40 polegas, samsung smartv luz de led", preco: 1500 },
        { img: "smartv.png", titulo: "tv sobre", descricao: "tv 20 polegas, samsung smartv luz de led", preco: 1000 }
    ]
    // todo array
    console.log(listaProdutos)
    // [
    //     {
    //         "img": "smartv.png",
    //         "titulo": "tv",
    //         "descricao": "tv 50 polegas, samsung smartv luz de led",
    //         "preco": 2000
    //     },
    //     {
    //         "img": "smartv.png",
    //         "titulo": "tv led",
    //         "descricao": "tv 40 polegas, samsung smartv luz de led",
    //         "preco": 1500
    //     },
    //     {
    //         "img": "smartv.png",
    //         "titulo": "tv sobre",
    //         "descricao": "tv 20 polegas, samsung smartv luz de led",
    //         "preco": 1000
    //     }
    //  ]
    
    // todo elemento selecionado
    console.log(listaProdutos[0])
    // {
    //     "img": "smartv.png",
    //     "titulo": "tv",
    //     "descricao": "tv 50 polegas, samsung smartv luz de led",
    //     "preco": 2000
    // },
    
    // apenas uma variavel do elemento selecionado
    console.log(listaProdutos[2].titulo)
    // "tv sobre"
    
    
    function exibirLista() {
        for (var i = 0; i < listaProdutos.length; i++) {
            // estou criando um item no html para CADA ELEMENTO/POSIÇÃO DO ARRAY
            document.write(`<li>
                <img src="${listaProdutos[i].img}">    
                <h1>${listaProdutos[i].titulo}</h1>
                <p>${listaProdutos[i].descricao} </p>
                <p style="color: gray; text-decoration: line-through;"> ${listaProdutos[i].preco*2}</p>
                <p style="color: green"> ${listaProdutos[i].preco}</p>
                <button style="background-color: green; color: white; border-radius: 5px; padding: 10px">compre agora</button>
                </li>
                `)
        }
    }
    
    exibirLista();