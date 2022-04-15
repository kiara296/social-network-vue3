module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    
        let columns = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            username:{
                type:dataTypes.STRING,
                allowNull: false
            },
            password:{
                type:dataTypes.STRING,
                allowNull: false
    
            },
            name: {
                type: dataTypes.STRING,
                allowNull: false
            },
            lastname:{
                type: dataTypes.STRING,
                allowNull: false
            },
            
            image: {
                type: dataTypes.STRING,
                allowNull: false
            },
            
        };
    
        let config = {
            tableName: 'users',
            timestamps: false,
            underescore: true
        };
        
        let User = sequelize.define(alias, columns, config);
    
        User.associate = function(models){
            User.hasMany(models.Book, {
                    as: 'book',
                    foreignKey: 'user_id'
            });
        } 
    
        return User;
    }