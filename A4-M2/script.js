// //const titulo = document.getElementsByTagName("h1")[0];
// titulo.innerText = "titulo";

// const btnBotao = document.getElementsByTagName("button")[0];

// btnBotao.addEventListener("click",function (){
//  if(titulo.style.backgroundColor == "green"){
//     titulo.style.backgroundColor = "red";
//     btnBotao.innerText = "apagado"

//  } else{
//     titulo.style.backgroundColor = "green";
//     btnBotao.innerText = "acesso"
//  }
// })

const botao = document.getElementById("botao");

// Adiciona um ouvinte de evento para o mouse passar sobre o botão
botao.addEventListener("mouseover", function() {
    // Altera a cor de fundo da página
    document.body.style.backgroundColor = "lightblue"; // A cor pode ser alterada
});
