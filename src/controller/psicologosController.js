const Psicologos = require("../models/Psicologos");

const psicologosController = {
  listarPsi: async (req, res) => {
    try {
      const listar = await Psicologos.findAll();
      return res.status(200).json(listar);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  buscarIdPsi: async (req, res) => {
    const { id } = req.params;
    const checkPsi = await Psicologos.findByPk(id);

    if (!checkPsi) {
      return res.status(404).json("Id não encontrado");
    }

    try {
      const buscarPsi = await Psicologos.findByPk(id);
      
      return res.status(200).json(buscarPsi);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  cadastrarPsi: async (req, res) => {
    try {
      const { nome, email, senha, apresentacao } = req.body;
      const cadastrarPsi = await Psicologos.create({
        nome,
        email,
        senha,
        apresentacao,
      });
      return res.status(200).json(cadastrarPsi);
    } catch (error) {
      return res.status(400).json("Não foi possível realizar o cadastro");
    }
  },

  atualizarPsi: async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;

    const checkPsi = await Psicologos.findByPk(id);
    if (!checkPsi) {
      return res.status(404).json("Id não encontrado");
    }

    try {
      atualizarPsi = await Psicologos.update(
        {
          nome,
          email,
          senha,
          apresentacao,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(200).json(atualizarPsi);
    } catch (error) {
      return res.status(500).json("Não foi possível atualizar o cadastro");
    }
  },

  deletarPsi: async (req, res) => {
    const { id } = req.params;
    
    const checkPsi = await Psicologos.findByPk(id);
    if (!checkPsi) {
      return res.status(404).json("Id não encontrado");
    };

    try {
      const deletarPsi = await Psicologos.destroy({
        where: {
          id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },
};

module.exports = psicologosController;
