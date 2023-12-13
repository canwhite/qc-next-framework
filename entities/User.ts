import { DataTypes } from 'sequelize';
import sequelize from '../sequelize';
const User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    }
});

sequelize.sync();
export default  User;
