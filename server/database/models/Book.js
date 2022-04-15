
module.exports = (sequelize, dataTypes) => {
    let alias = 'Book';

    let columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        alt: {
            type: dataTypes.STRING,
        },
        date: {
            type: dataTypes.STRING,
        }
    };

    let config = {
        tableName: 'books',
        timestamps: false,
        underescore: true
    };
    
    const Book = sequelize.define(alias, columns, config);

    Book.associate = function (models) {
        Book.belongsTo(models.User, { 
            as: "user_book",
            foreignKey: "user_id"
        })
    }

    return Book;
}