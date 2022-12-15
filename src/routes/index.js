const express = require("express");
const { buscarAtendimento } = require("../controller/atendimentosController");
const atendimentosController = require("../controller/atendimentosController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");
const psicologosValidation = require("../validations/psicologos/create");
const pacientesValidation = require("../validations/pacientes/create");
const authController = require("../controller/authController");
const authLoginValidation = require("../validations/auth/login");
// const dashController = require("../controller/dashController");


const routes = express.Router();

routes.post("/login", authLoginValidation, authController.login);

routes.get("/psicologos", psicologosController.listarPsi);
routes.get("/psicologos/:id", psicologosController.buscarPsiId);
routes.post("/psicologos", psicologosValidation, psicologosController.cadastrarPsi);
routes.put("/psicologos/:id", psicologosValidation, psicologosController.atualizarPsi);
routes.delete("/psicologos/:id", psicologosController.deletarPsi);

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.buscarPacientesId);
routes.post("/pacientes", pacientesValidation, pacientesController.cadastrarPaciente);
routes.put("/pacientes/:id", pacientesValidation, pacientesController.atualizarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.buscarAtendimento);
routes.post("/atendimentos", atendimentosController.cadastrarAtendimento);
routes.delete("/atendimentos/:id", atendimentosController.deletarAtendimento);

// Opcional
// routes.get("/dashboard/numero-pacientes", dashController.pacientes);
// routes.get("/dashboard/numero-atendimentos", dashController.atendimentos);
// routes.get("/dashboard/numero-psicologos", dashController.psicologos);
// routes.get("/dashboard/media-atendimentos", dashController.medAtendimentos);

module.exports = routes;
