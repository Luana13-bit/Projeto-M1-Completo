class Aluno {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  let alunos = [];
  let editIndex = -1;
  
  function salvarAluno() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
  
    if (nome === "" || idade === "") {
      alert("Preencha todos os campos!");
      return;
    }
  
    const novoAluno = new Aluno(nome, parseInt(idade));
  
    if (editIndex === -1) {
      alunos.push(novoAluno);
    } else {
      alunos[editIndex] = novoAluno;
      editIndex = -1;
    }
  
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
  
    atualizarLista();
  }
  
  function atualizarLista() {
    const lista = document.getElementById("listaAlunos");
    lista.innerHTML = "";
  
    alunos.forEach((aluno, index) => {
      const div = document.createElement("div");
      div.className = "aluno";
      div.innerHTML = `
        <strong>Nome:</strong> ${aluno.nome} | 
        <strong>Idade:</strong> ${aluno.idade}
        <br>
        <button onclick="editarAluno(${index})">Editar</button>
        <button onclick="excluirAluno(${index})">Excluir</button>
      `;
      lista.appendChild(div);
    });
  }
  
  function editarAluno(index) {
    const aluno = alunos[index];
    document.getElementById("nome").value = aluno.nome;
    document.getElementById("idade").value = aluno.idade;
    editIndex = index;
  }
  
  function excluirAluno(index) {
    if (confirm("Tem certeza que deseja excluir este aluno?")) {
      alunos.splice(index, 1);
      atualizarLista();
    }
  }
  