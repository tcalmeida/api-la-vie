const { Psicologos } = require("../models/");
const bcrypt = require("bcryptjs");

const psicologosController = {
  listarPsi: async (req, res) => {
    try {
      const listar = await Psicologos.findAll();
      return res.status(200).json(listar);
    } catch (error) {
      return  res.status(500).json("Não foi possível realizar a ação");
    }
  },

  buscarPsiId: async (req, res) => {
    const { id } = req.params;
    let buscarPsi = await Psicologos.findByPk(id);

    if (!buscarPsi) {
      return res.status(404).json("Id não encontrado");
    }

    try {
      buscarPsi = await Psicologos.findByPk(id, {
        attributes: {
          exclude: ["senha"],
        },
      });

      return res.status(200).json(buscarPsi);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  cadastrarPsi: async (req, res) => {
    try {
      const { nome, email, senha, apresentacao } = req.body;
      const senhaCripto = bcrypt.hashSync(senha, 10);

      const cadastrarPsi = await Psicologos.create({
        nome,
        email,
        senha: senhaCripto,
        apresentacao,
      });
      return res.status(201).json(cadastrarPsi);
    } catch (error) {
      return res.status(400).json("Não foi possível realizar o cadastro");
    }
  },

  atualizarPsi: async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;
    senhaCripto = bcrypt.hashSync(senha, 10);

    const checkPsi = await Psicologos.findByPk(id);
    if (!checkPsi) {
      return res.status(404).json("Id não encontrado");
    }

    try {
      atualizarPsi = await Psicologos.update(
        {
          nome,
          email,
          senha: senhaCripto,
          apresentacao,
        },
        {
          where: {
            id,
          },
        }
      );

      showPsicologo = await Psicologos.findByPk(id);
      return res.status(200).json(showPsicologo);
    } catch (error) {
      return res.status(500).json("Não foi possível atualizar o cadastro");
    }
  },

  deletarPsi: async (req, res) => {
    const { id } = req.params;

    let deletarPsi = await Psicologos.findByPk(id);
    if (!deletarPsi) {
      return res.status(404).json("Id não encontrado");
    }

    try {
      deletarPsi = await Psicologos.destroy({
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
