import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('next_test', 'root', '715705@Qc123', {
  host: 'localhost',
  dialect: 'mysql',
  port:3306,
  dialectModule: require('mysql2')
});

export default sequelize;