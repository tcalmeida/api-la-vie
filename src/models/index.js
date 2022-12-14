const Psicologos = require("../models/Psicologos");
const Atendimentos = require('../models/Atendimentos');
const Pacientes = require('../models/Pacientes');
//inserir as relações entre as tabelas aqui
//(ex: belongsTo, hasMany, belognsToMany... )

Pacientes.belongsTo(Atendimentos, {foreignKey: 'pacientes_id'});
Psicologos.belongsTo(Atendimentos, {foreignKey: 'psicologos_id'});







module.exports = {
  Psicologos,
  Atendimentos,
  Pacientes
};

// Todos os models devem ser importados para esse arquivo, relacionados e exportados pelo object module.exports