const sequelize = require ("sequelize");

const DB_NAME = "bd_la_vie";     
const DB_USER = "root";
const DB_PASS ="123qwe@";      
const DB_CONFIG =  {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
};

let db = {};

try {
    db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
  } catch (error) {
    console.error("Não foi realizar a conexão");
  }
  
  async function connection() {
    try {
      await db.authenticate();
      console.log("Banco de dados conectado!");
    } catch (error) {
      console.log("Erro ao tentar se conectar com o banco de dados");
    }
  };
  
  Object.assign(db, {
    connection,
  });
  
  module.exports = db;