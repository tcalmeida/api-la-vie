const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next) => {
  try {
    if (error instanceof ValidationError) {
      return res.status(error.statusCode).json(error);
    }
    
  } catch (error) {
    return res.status(500).json(error);
  }
};
