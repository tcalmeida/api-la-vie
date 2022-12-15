// const  {  } = require('../models/index');

const dashController = {

    pacientes: async (req, res) => {   //  -------------testar 
        try {
          const pacientes = await Pacientes.count({
            distinct: true,
            col: "id",
          });
          return res.status(200).json(pacientes);
    
        } catch (error) {
          return res.status(500).json("Não foi possível realizar a ação");
        }
      },
}