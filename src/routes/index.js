const express = require("express");
const atendimentosController = require("../controller/atendimentosController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");
const dashController = require("../controller/dashController");
const psicologosValidation = require("../validations/psicologos/create");
const pacientesValidation = require("../validations/pacientes/create");
const atendimentosValidation = require("../validations/atendimentos/cretate");
const psicologosValidationId = require("../validations/psicologos/update");
const pacientesValidationId = require("../validations/pacientes/update");
const atendimentosValidationId = require("../validations/atendimentos/update");
const authController = require("../controller/authController");
const authLoginValidation = require("../validations/auth/login");
const authUser = require("../middlewares/auth");

const routes = express.Router();

routes.post("/login", authLoginValidation, authController.login);

routes.get("/psicologos", psicologosController.listarPsi);
routes.get("/psicologos/:id", psicologosValidationId, psicologosController.buscarPsiId);
routes.post("/psicologos", psicologosValidation, psicologosController.cadastrarPsi);
routes.put("/psicologos/:id", psicologosValidationId, psicologosValidation, psicologosController.atualizarPsi);
routes.delete("/psicologos/:id", psicologosValidationId, psicologosController.deletarPsi);

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesValidationId,  pacientesController.buscarPacientesId);
routes.post("/pacientes", pacientesValidation, pacientesController.cadastrarPaciente);
routes.put("/pacientes/:id", pacientesValidationId, pacientesValidation, pacientesController.atualizarPaciente);
routes.delete("/pacientes/:id", pacientesValidationId, pacientesController.deletarPaciente);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosValidationId, atendimentosController.buscarAtendimento);
routes.post("/atendimentos", authUser, atendimentosValidation, atendimentosController.cadastrarAtendimento);
routes.delete("/atendimentos/:id", atendimentosValidationId, atendimentosController.deletarAtendimento);

routes.get("/dashboard/numero-psicologos", dashController.psicologos);
routes.get("/dashboard/numero-pacientes", dashController.pacientes);
routes.get("/dashboard/numero-atendimentos", dashController.atendimentos);
routes.get("/dashboard/media-atendimentos", dashController.media);

module.exports = routes;
