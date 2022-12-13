const express = require("express");
const psicologosController = require("../controller/psicologosController");

const routes = express.Router();

routes.get("/psicologos", psicologosController.listarPsi);
routes.get("/psicologos/:id", psicologosController.buscarIdPsi);
routes.post("/psicologos", psicologosController.cadastrarPsi);
routes.put("/psicologos/:id", psicologosController.atualizarPsi);
routes.delete("/psicologos/:id", psicologosController.deletarPsi);


//Criando rotas atendimentos
routes.get("/atendimentos", );
routes.get("/atendimentos/:id", )
routes.post("/atendimentos", )


// Opcional
// routes.get("/dashboard/numero-pacientes", dashController.pacientes);
// routes.get("/dashboard/numero-atendimentos", dashController.atendimentos);
// routes.get("/dashboard/numero-psicologos", dashController.psicologos);
// routes.get("/dashboard/media-atendimentos", dashController.medAtendimentos);

module.exports = routes;
