const alunoModel = require("../models/aluno.js");

const getAllAlunos = async () => {
  return await alunoModel.findMany();
};

const createAluno = async (alunoData) => {
  return await alunoModel.create({ data: alunoData });
};

module.exports = { getAllAlunos, createAluno };
