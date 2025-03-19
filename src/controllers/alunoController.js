const alunoService = require("../services/alunoService");

const getAllAlunos = async (req, res) => {
  const alunos = await alunoService.getAllAlunos();
  res.json(alunos);
};

const createAluno = async (req, res) => {
  const aluno = await alunoService.createAluno(req.body);
  res.status(201).json(aluno);
};

module.exports = { getAllAlunos, createAluno };
