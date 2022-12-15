const Psicologos = require("../models/Psicologos");
const Atendimentos = require("../models/Atendimentos");
const Pacientes = require("../models/Pacientes");

Pacientes.hasMany(Atendimentos, {foreignKey: "pacientes_id"});
Atendimentos.belongsTo(Pacientes, {foreignKey: "pacientes_id"});

Psicologos.hasMany(Atendimentos, {foreignKey: "psicologos_id"});
Atendimentos.belongsTo(Psicologos, {foreignKey: "psicologos_id"});


module.exports = {
  Psicologos,
  Atendimentos,
  Pacientes,
};
