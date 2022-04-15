const mainService = require("../services/mainService");

const mainController = {
  
   catalog: async (req, res) => {
       console.log('test')
    try {
        const allBooks = await mainService.getBooks();

      return res.status(200).json({
        allBooks,
        status: 200,
        message: 'hello'
      })
    } catch(e) {
      console.log("\nError\n", e);
    }
  },
  
  register: async (req, res) => {
     /*   let errors = validationResult(req); */
   /*  let data = { ...req.body, file: req.file ? req.file.filename : ""}; */
    /* if (errors.isEmpty()){ */
    /* try {
     
      await mainService.createUser(data)
      
      res.send('usuario creado');
      
    } catch(e) {
      res.send({
        message: 'hubo un error'
      })
       }
     /*  console.log(e); */
    }
 /*  } else { */
   
   /*  let message = null; */
/* 
   
  }
  }, */
   
};

module.exports = mainController;
