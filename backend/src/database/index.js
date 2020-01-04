import Sequelize from 'sequelize';

import dbConfig from './config/database';
import UserModel from './models/User';
import PictureModel from './models/Picture';
const sequel = new Sequelize(dbConfig);

UserModel.init(sequel);
PictureModel.init(sequel);

UserModel.associate(sequel.models);
PictureModel.associate(sequel.models);
module.exports = sequel;
