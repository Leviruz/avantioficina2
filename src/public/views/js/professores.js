document.addEventListener("DOMContentLoaded", () => {
  const professoresList = document.getElementById("professores-list");
  const professorForm = document.getElementById("professor-form");

  const fetchProfessores = async () => {
    const response = await fetch("/professores");
    const professores = await response.json();
    professoresList.innerHTML = professores
      .map(
        (professor) => `
      <li>
        ${professor.nome} - ${professor.disciplina}
        <button onclick="deleteProfessor(${professor.id})">Excluir</button>
      </li>
    `
      )
      .join("");
  };

  professorForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const disciplina = document.getElementById("disciplina").value;

    await fetch("/professores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, disciplina }),
    });

    fetchProfessores();
    professorForm.reset();
  });

  window.deleteProfessor = async (id) => {
    await fetch(`/professores/${id}`, { method: "DELETE" });
    fetchProfessores();
  };

  fetchProfessores();
});
