const express = require("express");
const router = express.Router();

const alunoController = require("../controllers/alunoController");
const professorController = require("../controllers/professorController");
const boletimController = require("../controllers/boletimController");

// Rotas para Aluno
router.get("/alunos", alunoController.getAllAlunos);
router.post("/alunos", alunoController.createAluno);

// Rotas para Professor
router.get("/professores", professorController.getAllProfessores);
router.post("/professores", professorController.createProfessor);
router.put("/professores/:id", professorController.updateProfessor);
router.delete("/professores/:id", professorController.deleteProfessor);

// Rotas para Boletim
router.get("/boletins", boletimController.getAllBoletins);
router.post("/boletins", boletimController.createBoletim);
router.put("/boletins/:id", boletimController.updateBoletim);
router.delete("/boletins/:id", boletimController.deleteBoletim);

module.exports = router;
