const express = require("express");
const { buscarAtendimento } = require("../controller/atendimentosController");
const atendimentosController = require("../controller/atendimentosController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");
const psicologosValidation = require("../validations/psicologos/create");


const routes = express.Router();

routes.get("/psicologos", psicologosController.listarPsi);
routes.get("/psicologos/:id", psicologosController.buscarPsiId);
routes.post("/psicologos", psicologosValidation, psicologosController.cadastrarPsi);
routes.put("/psicologos/:id", psicologosValidation, psicologosController.atualizarPsi);
routes.delete("/psicologos/:id", psicologosController.deletarPsi);

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.buscarPacientesId);
routes.post("/pacientes", pacientesController.cadastrarPaciente);
routes.put("/pacientes/:id", pacientesController.atualizarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);

//Criando rotas atendimentos
routes.get("/atendimentos", atendimentosController.listarAtendimentos);
<<<<<<< HEAD
routes.get("/atendimentos/:id", atendimentosController.buscarAtendimento);
routes.post("/atendimentos", atendimentosController.cadastrarAtendimento);
routes.delete("/atendimentos/:id", atendimentosController.deletarAtendimento);

=======
routes.get("/atendimentos/:id", atendimentosController.buscarAtendimento)
routes.post("/atendimentos", atendimentosController.cadastrarAtendimento)
>>>>>>> 6846bf3baa7d438b5bd19e214cd2fc850c5378eb
// Opcional
// routes.get("/dashboard/numero-pacientes", dashController.pacientes);
// routes.get("/dashboard/numero-atendimentos", dashController.atendimentos);
// routes.get("/dashboard/numero-psicologos", dashController.psicologos);
// routes.get("/dashboard/media-atendimentos", dashController.medAtendimentos);

module.exports = routes;
