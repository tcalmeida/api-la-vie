const { Atendimentos, Psicologos, Pacientes } = require("../models/");

const atendimentosController = {
  
  listarAtendimentos: async (req, res) => {
    const listaDeAtendimentos = await Atendimentos.findAll({
      include: Pacientes,
      Psicologos,
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
        attributes: {
          exclude: ["senha"],
        },
      });

      return res.status(200).json(buscarAtendimento);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  cadastrarAtendimento: async (req, res) => {
    try {
      const { data_atendimento, observacao, pacientes_id, psicologos_id } =
        req.body;
      const novoAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        pacientes_id,
        psicologos_id,
      });

      return res.status(201).json(novoAtendimento);
    } catch (error) {
      return  console.log(error)
    }
  },

  deletarAtendimento: async (req, res) => {
    const { id } = req.params;

    deletarAtendimento = await Atendimentos.findByPk(id);
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
