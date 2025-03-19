const boletimRepository = require("../repository/boletimRepository");

const getAllBoletins = async () => {
  return await boletimRepository.getAllBoletins();
};

const createBoletim = async (boletimData) => {
  return await boletimRepository.createBoletim(boletimData);
};

const updateBoletim = async (id, boletimData) => {
  return await boletimRepository.updateBoletim(id, boletimData);
};

const deleteBoletim = async (id) => {
  return await boletimRepository.deleteBoletim(id);
};

module.exports = {
  getAllBoletins,
  createBoletim,
  updateBoletim,
  deleteBoletim,
};
