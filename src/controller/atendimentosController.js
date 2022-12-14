const { Atendimentos, Psicologos, Pacientes } = require("../models/");

const atendimentosController = {
  listarAtendimentos: async (req, res) => {
    const listaDeAtendimentos = await Atendimentos.findAll();
    res.status(200).json(listaDeAtendimentos);
  },

  cadastrarAtendimento: async (req, res) => {
    try {
      const { paciente_id, data_atendimento, observacao } = req.body;
      const novoAtendimento = await Atendimentos.create({
        pacientes_id,
        data_atendimento,
        observacao,
      });
      return res.status(201).json(novoAtendimento);
    } catch (error) {
      return res.status(400).json("Não foi possível realizar o cadastro");
    }
  },

  buscarAtendimento: async (req, res) => {
    const {id} = res.params;
    let buscarID = await Atendimentos.findByPk(id);

    if (!buscarID) {
        return res.status(404).json("Id não encontrado");
      }

      try {
        buscarID = await Psicologos.findByPk(id);
  
        return res.status(200).json(buscarID);
      } catch (error) {
        return res.status(500).json("Não foi possível realizar a ação");
      }
  },
};
module.exports = atendimentosController;
