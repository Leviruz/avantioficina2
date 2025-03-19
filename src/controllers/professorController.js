const professorService = require("../services/professorService");

const getAllProfessores = async (req, res) => {
  try {
    const professores = await professorService.getAllProfessores();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProfessor = async (req, res) => {
  try {
    const professor = await professorService.createProfessor(req.body);
    res.status(201).json(professor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    const professor = await professorService.updateProfessor(
      Number(id),
      req.body
    );
    res.json(professor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    await professorService.deleteProfessor(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProfessores,
  createProfessor,
  updateProfessor,
  deleteProfessor,
};
