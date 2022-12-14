const express = require("express");
const psicologosController = require("../controller/psicologosController");
const psicologosValidation = require("../validations/psicologos/create");
const authController = require("../controller/authController");
const authLoginValidation = require("../validations/auth/login");
const dashController = require("../controller/dashController");


const routes = express.Router();

routes.get("/psicologos", psicologosController.listarPsi);
routes.get("/psicologos/:id", psicologosController.buscarPsiId);
routes.post("/psicologos", psicologosValidation, psicologosController.cadastrarPsi);
routes.put("/psicologos/:id", psicologosValidation, psicologosController.atualizarPsi);
routes.delete("/psicologos/:id", psicologosController.deletarPsi);

routes.post("/login", authLoginValidation, authController.login);

// Opcional
// routes.get("/dashboard/numero-pacientes", dashController.pacientes);
// routes.get("/dashboard/numero-atendimentos", dashController.atendimentos);
routes.get("/dashboard/numero-psicologos", dashController.psicologos);
// routes.get("/dashboard/media-atendimentos", dashController.medAtendimentos);

module.exports = routes;
