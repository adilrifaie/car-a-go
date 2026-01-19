const { DataTypes } = require('sequelize');
const db = require('../database/config');

const Users = db.define('Users', {
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'UserCategories',
            key: 'id'
        }
    }
}, {timestamps: true});

module.exports = Users;
