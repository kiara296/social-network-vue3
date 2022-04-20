// DATA ACCESS LAYER (data access object pattern)

const db = require('../../database/models');
const { Op } = require("sequelize");


const mainDao = {


    getBooks: async() => {
        return await db.Book.findAll({
          include: [{ association: "user_book" }]
        });
      },

      getUsers: async() => {
        return await db.User.findAll({
          include: [{ association: "book" }]
        });
      },

      getUserByEmail: async(email) =>{
        return await db.User.findOne({
          where: {
            username: email}
        })
      },


      /* crea un nuevo registro en la tabla de usuarios */
      createUser: (user) => {
        db.User.create(user);
      },



}

module.exports = mainDao;