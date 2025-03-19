const professorRepository = require("../repository/professorRepository");

const getAllProfessores = async () => {
  return await professorRepository.getAllProfessores();
};

const createProfessor = async (professorData) => {
  return await professorRepository.createProfessor(professorData);
};

const updateProfessor = async (id, professorData) => {
  return await professorRepository.updateProfessor(id, professorData);
};

const deleteProfessor = async (id) => {
  return await professorRepository.deleteProfessor(id);
};

module.exports = {
  getAllProfessores,
  createProfessor,
  updateProfessor,
  deleteProfessor,
};
