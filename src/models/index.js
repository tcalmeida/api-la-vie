const Psicologos = require("../models/Psicologos");
const Atendimentos = require("../models/Atendimentos");
const Pacientes = require("../models/Pacientes");

Pacientes.hasMany(Atendimentos, {foreignKey: "paciente_id"});
Atendimentos.belongsTo(Pacientes, {foreignKey: "paciente_id"});

Psicologos.hasMany(Atendimentos, {foreignKey: "psicologo_id"});
Atendimentos.belongsTo(Psicologos, {foreignKey: "psicologo_id"});


module.exports = {
  Psicologos,
  Atendimentos,
  Pacientes,
};
