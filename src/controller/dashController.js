const { Psicologos } = require("../models/");

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
};

module.exports = dashController;

