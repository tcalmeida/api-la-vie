const Psicologos = require("../models/Psicologos");
const Atendimentos = require('../models/Atendimentos');
const Pacientes = require('../models/Pacientes');

Pacientes.belongsTo(Atendimentos, {foreignKey: 'pacientes_id'});
Psicologos.belongsTo(Atendimentos, {foreignKey: 'psicologos_id'});





module.exports = {
  Psicologos,
  Atendimentos,
  Pacientes
};