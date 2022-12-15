const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/key");

const loginController = {
  login: async (req, res) => {
    const { email, senha } = req.body;

    const psicologo = await Psicologos.findOne({
      where: {
        email,
      },
    });

    if (!psicologo) {
      return res
        .status(401)
        .json("E-mail ou senha inválido, verifique e tente novamente");
    }

    if (!bcrypt.compareSync(senha, psicologo.senha)) {
      return res
        .status(401)
        .json("E-mail ou senha inválido, verifique e tente novamente");
    }

    try {
      const jwtToken = jwt.sign(
        {
          id: psicologo.id,
          email: psicologo.email,
          nome: psicologo.nome,
        },
        secret.key
      );

      return res.json(jwtToken);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },
};

module.exports = loginController;
