// DATA ACCESS LAYER (data access object pattern)

const db = require('../../database/models');
const { Op } = require("sequelize");


const mainDao = {


    getBooks: async() => {
        return await db.Book.findAll({
          include: [{ association: "user_book" }]
        });
      },

      /* crea un nuevo registro en la tabla de usuarios */
      createUser: (user) => {
        db.User.create(user);
      },



}

module.exports = mainDao;