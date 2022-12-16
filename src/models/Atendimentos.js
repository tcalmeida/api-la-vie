const db = require("../database");
const { DataTypes } = require("sequelize");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const Atendimentos = db.define(
  "Atendimentos",
  {
    atendimento_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: "id",
      },
    },
    data_atendimento: {
      type: DataTypes.DATEONLY,
    },
    observacao: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    psicologo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: "id",
      },
    },
  },
  {
    tableName: "atendimentos",
  }
);

module.exports = Atendimentos;
