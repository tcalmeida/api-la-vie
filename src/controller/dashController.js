const { Psicologos, Pacientes, Atendimentos } = require("../models/");

const dashController = {
  psicologos: async (req, res) => {
    try {
      const psicologos = await Psicologos.count();
      return res
        .status(200)
        .json(`Existem ${psicologos} psicólogos cadastrados`);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },
  pacientes: async (req, res) => {
    try {
      const pacientes = await Pacientes.count();
      return res
        .status(200)
        .json(`Existem ${pacientes} pacientes cadastrados`);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },
  atendimentos: async (req, res) => {
    try {
      const atendimentos = await Atendimentos.count();
      return res
        .status(200)
        .json(`Existem ${atendimentos} atendimentos cadastrados`);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },
  media: async (req, res) => {
    try {
      atendimentos = await Atendimentos.count();
      psicologos = await Psicologos.count();
      const media = atendimentos / psicologos
      return res
        .status(200)
        .json(`A média de atendimentos por psicologos é de ${media}.`);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },
};

module.exports = dashController;