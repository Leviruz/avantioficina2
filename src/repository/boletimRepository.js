const prisma = require("../prisma");

const getAllBoletins = async () => {
  return await prisma.boletim.findMany({
    include: { aluno: true },
  });
};

const createBoletim = async (boletimData) => {
  return await prisma.boletim.create({
    data: boletimData,
  });
};

const updateBoletim = async (id, boletimData) => {
  return await prisma.boletim.update({
    where: { id },
    data: boletimData,
  });
};

const deleteBoletim = async (id) => {
  return await prisma.boletim.delete({
    where: { id },
  });
};

module.exports = {
  getAllBoletins,
  createBoletim,
  updateBoletim,
  deleteBoletim,
};
