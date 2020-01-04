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

    static associate(models) {
        this.hasMany(models.Picture, {
            foreignKey: 'owner_id',
            as: 'pictures'
        });
    }
    
}

module.exports = User;