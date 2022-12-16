const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    data_atendimento: Joi.string().required(),
    observacao: Joi.string().required(),
    paciente_id: Joi.number().integer().required(),
  }),
});
