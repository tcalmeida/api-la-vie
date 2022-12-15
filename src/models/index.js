const Psicologos = require("../models/Psicologos");
const Atendimentos = require('../models/Atendimentos');
const Pacientes = require('../models/Pacientes');

// Atendimentos - Pacientes
Atendimentos.belongsTo(Pacientes, {foreignKey: "pacientes_id"});
Pacientes.hasMany(Atendimentos, {foreignKey: "pacientes_id"});

//Atendimentos - Psicologos
Atendimentos.belongsTo(Psicologos, {foreignKey: "psicologos_id"});
Psicologos.hasMany(Atendimentos, {foreignKey: "psicologos_id"});


module.exports = {
  Psicologos,
  Atendimentos,
  Pacientes
};