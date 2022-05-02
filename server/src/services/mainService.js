const mainDao = require("../dao/mainDao");
let bcrypt= require ('bcryptjs');


const mainService = {
  
    getBooks: async () => {
        
      return await mainDao.getBooks();
    },

    getUsers: async () => {
      return await mainDao.getUsers();
    },

    getUserByEmail: async (email) => {
      return await mainDao.getUserByEmail(email);
    },
    
    createUser: async (body) => {
        const user = {
            name: body.name,
            lastname: body.lastname,
            username: body.email,
            password:   bcrypt.hashSync(body.password, 10),
         /*    image: body.file.filename */
        }
    
         const response = await mainDao.createUser(user);
        return response
        
      }  

  }
  
  module.exports = mainService;
  