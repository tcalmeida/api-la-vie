const { Pacientes } = require("../models/");

const pacientesController = {
  listarPacientes: async (req, res) => {
    const listar = await Pacientes.findAll();
    res.status(200).json(listar);
  },

  buscarPacientesId: async (req, res) => {
    const { id } = req.params;
    let buscarPacientes = await Pacientes.findByPk(id);

    if (!buscarPacientes) {
      return res.status(404).json("Id não encontrado");
    }

    try {
      buscarPacientes = await Pacientes.findByPk(id);
      return res.status(200).json(buscarPacientes);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  cadastrarPaciente: async (req, res) => {
    try {
      const { nome, email, idade } = req.body;

      const cadastrarPacientes = await Pacientes.create({
        nome,
        email,
        idade,
      });

      return res.status(201).json(cadastrarPacientes);
    } catch (error) {
      return res.status(400).json("Não foi possível realizar o cadastro");
    }
  },

  atualizarPaciente: async (req, res) => {
    const { id } = req.params;
    const { nome, email, idade, psicologos_id } = req.body;

    const checkPaciente = await Pacientes.findByPk(id);
    if (!checkPaciente) {
      return res.status(404).json("Id não encontrado");
    }

    try {
      atualizarPaciente = await Pacientes.update(
        {
          nome,
          email,
          idade,
          psicologos_id,
        },
        {
          where: {
            id,
          },
        }
      );

      showPaciente = await Pacientes.findByPk(id);
      return res.status(200).json(showPaciente);
    } catch (error) {
      return res.status(500).json("Não foi possível atualizar o cadastro");
    }
  },

  deletarPaciente: async (req, res) => {
    const { id } = req.params;

    let deletarPaciente = await Pacientes.findByPk(id);
    if (!deletarPaciente) {
      return res.status(404).json("Id não encontrado");
    }

    try {
      deletarPaciente = await Pacientes.destroy({
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

module.exports = pacientesController;
