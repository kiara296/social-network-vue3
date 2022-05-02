const mainService = require("../services/mainService");
const jwt = require('jsonwebtoken')
const config = require('../../database/config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, 'secret', {
    expiresIn: ONE_WEEK
  })
}

const mainController = {
  /* Posts  */
 
  /* Get All Books */
  catalog: async (req, res) => {
   
    try {
      const allBooks = await mainService.getBooks();

      return res.status(200).json({
        allBooks,
        status: 200,
        message: "hello",
      });
    } catch (e) {
      console.log("\nError\n", e);
    }
  },

  /* Users */

  register: async (req, res) => {
    const data = {...req.body, file: req.file ? req.file.filename : ""}
    try {
      
      const user = await mainService.createUser(data)
    

      res.send(user);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to log in",
      });
    }
  },

  login: async (req, res) => {
   
    try {
      const {email, password} = req.body;
      const user = await mainService.getUserByEmail(email);
      const userJson =  user.toJSON(user)
      const token = jwtSignUser (userJson)

  

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = function (password) {
        return bcrypt.compareAsync(password, user.password)
      }
        if(!isPasswordValid){
        return res.status(403).send({
          error: 'The password information was incorrect'
        })
      } 
     
      res.send({
        user: user,
        token:token
      });
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to log in",
      });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const allUser = await mainService.getUsers();
      return res.status(200).json({
        allUser,
        status: 200,
        message: "hello",
      });
    
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to log in",
      });
    }
  }

} 

module.exports = mainController;
