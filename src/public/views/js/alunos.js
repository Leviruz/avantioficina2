document.addEventListener("DOMContentLoaded", () => {
  const alunosList = document.getElementById("alunos-list");
  const alunoForm = document.getElementById("aluno-form");

 
  const fetchAlunos = async () => {
    const response = await fetch("/alunos");
    const alunos = await response.json();
    alunosList.innerHTML = alunos
      .map(
        (aluno) => `
      <li>
        ${aluno.nome} - ${aluno.matricula} - ${aluno.turma}
        <button onclick="deleteAluno(${aluno.id})">Excluir</button>
      </li>
    `
      )
      .join("");
  };


  alunoForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const matricula = document.getElementById("matricula").value;
    const turma = document.getElementById("turma").value;

    await fetch("/alunos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, matricula, turma }),
    });

    fetchAlunos();
    alunoForm.reset();
  });


  window.deleteAluno = async (id) => {
    await fetch(`/alunos/${id}`, { method: "DELETE" });
    fetchAlunos();
  };


  fetchAlunos();
});
