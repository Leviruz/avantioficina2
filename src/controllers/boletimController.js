const boletimService = require("../services/boletimService");

const getAllBoletins = async (req, res) => {
  try {
    const boletins = await boletimService.getAllBoletins();
    res.json(boletins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBoletim = async (req, res) => {
  try {
    const boletim = await boletimService.createBoletim(req.body);
    res.status(201).json(boletim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBoletim = async (req, res) => {
  try {
    const { id } = req.params;
    const boletim = await boletimService.updateBoletim(Number(id), req.body);
    res.json(boletim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBoletim = async (req, res) => {
  try {
    const { id } = req.params;
    await boletimService.deleteBoletim(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBoletins,
  createBoletim,
  updateBoletim,
  deleteBoletim,
};
