const mainDao = require("../dao/mainDao");

const mainService = {
  
    getBooks: async () => {
        
      return await mainDao.getBooks();
    },

    createUser: async (body) => {
        const user = {
            name: body.name,
            lastname: body.lastname,
            username: body.email,
            password: bcrypt.hashSync(body.password, 10),
            image: body.file ? body.file : ""
        }
    
          await mainDao.createUser(user);
      },
  

  }
  
  module.exports = mainService;
  