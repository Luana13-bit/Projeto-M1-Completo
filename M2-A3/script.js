// REVISÃO INICIAL

// VARIAVEIS -> local onde armazenamos dados/informações
// VARIAVEIS -> STRING(TEXTOS)/NUMBER(NUMEROS)/BOOLEANO(TRUE/FALSE)/FUNCTIONS(FUNÇÕES)
// VARIAVEIS -> LET armazena informações mutaveis ou seja poderão ser alteradas
// VARIAVEIS -> CONST armazena informações constantes ou seja que não sofrerão alterações

// FUNÇÕES -> FUNÇÕES ANONIMAS que são funções que não possuem nome
// FUNÇÕES -> FUNÇÕES ANONIMAS estão atribuidas/associadas a uma variavel CONST 
// FUNÇÕES -> PARAMETROS que é o local onde criamos variaveis locais apenas para representar dados
// passados por quem chamou a função
// FUNÇÕES -> ARGUMENTOS que é o local onde passamos os valores para dentro da chamada da função
// FUNÇÕES -> CALLBACK é uma FUNÇÃO sendo passada como parametro de outrsa função

// arrow function -> simplificação da função anonima
const somar = (valor1,valor2) => {
    return valor1 + valor2
}

const calculadora = (valor1,valor2,operacao) => {
    let result = operacao(valor1, valor2)
    console.log(result)
}

// DOM -> Descrição escrita do documento HTML ou seja descrição de todas as TAGS
// DOM -> SELETORES (getElementById/getElementByTagName/getElementsByClassName)
// const titulo = document.getElementById("titulo");
// titulo.style.color = "pink";
// titulo.innerText = "Mundo alterado";

// 1 -> Criaremos uma estrutura no HTML (div/input/button/ul/h1)
// 2 -> Trazer essa estrutura HTML para o JAVASCRIPT
// 3 -> Faremos alterações nessa estrutura HTML pelo JAVASCRIPT
// 4 -> Devolveremos o HTML atualizado


const createSection = (titleParam, paragraphParam, btnParam) => {
    // CRIANDO ELEMENTO NO JAVASCRIPT
    const container = document.createElement("div");
    const title = document.createElement("h1");
    const paragraph = document.createElement("p");
    const btnClick = document.createElement("button");
    const inputVl1 = document.createElement("input");
    const inputVl2 = document.createElement("input");
    const inputVl3 = document.createElement("input");
    const resultado = document.createElement("h1");

    // ADICIONAR TEXTOS 
    title.innerText = titleParam;
    paragraph.innerText = paragraphParam;
    btnClick.innerText = btnParam;
    resultado.innerText = "0"

    // textos cinzas 
    inputVl1.placeholder = "digite o primeiro valor";
    inputVl2.placeholder = "digite o segundo valor";
    inputVl3.placeholder = "digite a operaçao";

    // ADICIONANDO CLASSES PARA ESTILIZAÇÃO
    container.classList.add("style-container");
    title.classList.add("style-title");
    paragraph.classList.add("style-paragraph");
    btnClick.classList.add("style-btn");

    // ADICIONAR EVENTOS(AÇÕES)
    // addEventListener associa uma interação do usuario com uma função
    btnClick.addEventListener("click", ()=> {
        if(inputVl3.value==="somar" || inputVl3.value==="+"){
   resultado.innerText=Number(inputVl1.value)+Number(inputVl2.value);
        }
    });

    // ADICIONAR ELEMENTOS NO HTML
    container.appendChild(title);
    container.appendChild(paragraph);
    container.appendChild(inputVl1);
    container.appendChild(inputVl2);
    container.appendChild(inputVl3);
    container.appendChild(resultado);
    container.appendChild(btnClick);
    // adicionando o container feito no javascript ao body do HTML
    document.body.appendChild(container);
}

createSection("Seja bem vindo!", "Projeto calculadora em construção", "Clique aqui");
createSection("Batatinha frita 1,2,3", "Projeto round 6", "Jogue Agora");
createSection("Narutinho x Boruto", "Novo jogo shippuden", "Lute Lute");
createSection("Confidencial", "Mantenha Sigilo", "Espionar");



