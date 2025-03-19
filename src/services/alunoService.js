const alunoRepository = require("../repository/alunoRepository");

const getAllAlunos = async () => {
  return await alunoRepository.getAllAlunos();
};

const createAluno = async (alunoData) => {
  return await alunoRepository.createAluno(alunoData);
};

module.exports = { getAllAlunos, createAluno };
