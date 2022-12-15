const { Atendimentos, Psicologos } = require("../models/");
const tokenJWT = require("./authController");

const atendimentosController = {
  listarAtendimentos: async (req, res) => {
    const listaDeAtendimentos = await Atendimentos.findAll({
      include: Psicologos,
    });
    res.status(200).json(listaDeAtendimentos);
  },

  buscarAtendimento: async (req, res) => {
    const { id } = req.params;
    let buscarAtendimento = await Atendimentos.findByPk(id);

    if (!buscarAtendimento) {
      return res.status(404).json("Id não encontrado");
    }

    try {
      buscarAtendimento = await Atendimentos.findByPk(id, {
        include: { all: true },
      });

      return res.status(200).json(buscarAtendimento);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  cadastrarAtendimento: async (req, res) => {
    console.log(req.auth)
    
    try {
      const { data_atendimento, observacao, pacientes_id } = req.body;

      const cadastrarAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        pacientes_id,
        psicologos_id: req.auth.id
      });

      return res.status(201).json(cadastrarAtendimento);
    } catch (error) {
      return res.status(400).json("Não foi possível realizar o cadastro");
    }
  },

  deletarAtendimento: async (req, res) => {
    const { id } = req.params;

    let deletarAtendimento = await Atendimentos.findByPk(id);
    if (!deletarAtendimento) {
      return res.status(404).json("Id não encontrado");
    }

    try {
      deletarAtendimento = await Atendimentos.destroy({
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

module.exports = atendimentosController;
