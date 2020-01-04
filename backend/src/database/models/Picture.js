import { Model, DataTypes } from 'sequelize';
import 'dotenv/config';
class Picture extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            path: {
                type: DataTypes.STRING,
                get() {
                    return `${process.env.url}/files/${this.getDataValue('path')}`;
                }
            },
            description: DataTypes.TEXT
        }, {
            sequelize,
            tableName: 'pictures',
        })
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'owner_id',
            as: 'owner'
        });
    }

    
}

module.exports = Picture;