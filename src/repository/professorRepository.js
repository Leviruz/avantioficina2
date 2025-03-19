const prisma = require("../prisma");

const getAllProfessores = async () => {
  return await prisma.professor.findMany();
};

const createProfessor = async (professorData) => {
  return await prisma.professor.create({
    data: professorData,
  });
};

const updateProfessor = async (id, professorData) => {
  return await prisma.professor.update({
    where: { id },
    data: professorData,
  });
};

const deleteProfessor = async (id) => {
  return await prisma.professor.delete({
    where: { id },
  });
};

module.exports = {
  getAllProfessores,
  createProfessor,
  updateProfessor,
  deleteProfessor,
};
