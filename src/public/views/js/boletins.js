document.addEventListener("DOMContentLoaded", () => {
  const boletinsList = document.getElementById("boletins-list");
  const boletimForm = document.getElementById("boletim-form");

  const fetchBoletins = async () => {
    const response = await fetch("/boletins");
    const boletins = await response.json();
    boletinsList.innerHTML = boletins
      .map(
        (boletim) => `
      <li>
        Aluno ID: ${boletim.alunoId} - Disciplinas: ${boletim.disciplina1}, ${boletim.disciplina2}, ${boletim.disciplina3}, ${boletim.disciplina4}, ${boletim.disciplina5}
        <button onclick="deleteBoletim(${boletim.id})">Excluir</button>
      </li>
    `
      )
      .join("");
  };

  boletimForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const alunoId = document.getElementById("alunoId").value;
    const disciplina1 = document.getElementById("disciplina1").value;
    const disciplina2 = document.getElementById("disciplina2").value;
    const disciplina3 = document.getElementById("disciplina3").value;
    const disciplina4 = document.getElementById("disciplina4").value;
    const disciplina5 = document.getElementById("disciplina5").value;

    await fetch("/boletins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        alunoId,
        disciplina1,
        disciplina2,
        disciplina3,
        disciplina4,
        disciplina5,
      }),
    });

    fetchBoletins();
    boletimForm.reset();
  });

  window.deleteBoletim = async (id) => {
    await fetch(`/boletins/${id}`, { method: "DELETE" });
    fetchBoletins();
  };

  fetchBoletins();
});
