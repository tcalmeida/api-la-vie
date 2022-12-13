const db = require("../database");
const { DataTypes } = require("Sequelize");

const Pacientes = db.define(
    "Pacientes",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING
        },
     email: {
        type: DataTypes.STRING
     },   
     idade: {
        type: DataTypes.INTEGER
     },
     createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
      psicologos_id: {
        type: DataTypes.INTEGER,
        references: {
            model: psicologos,
            key:"id"
        }
      }     
    },{
        tableName: "pacientes",
    }
);

module.exports = Pacientes