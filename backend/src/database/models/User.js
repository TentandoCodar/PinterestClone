import {Model, DataTypes} from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            email: DataTypes.STRING,
            name: DataTypes.STRING,
            password: DataTypes.TEXT,
            token: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'users'
        })
    }

    
}

module.exports = User;