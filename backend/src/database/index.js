import Sequelize from 'sequelize';

import dbConfig from './config/database';
import UserModel from './models/User';

const sequel = new Sequelize(dbConfig);

UserModel.init(sequel);

module.exports = sequel;
