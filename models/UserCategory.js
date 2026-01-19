const { DataTypes } = require('sequelize');
const db = require('../database/config');

const UserCategory = db.define('UserCategory', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
}, {timestamps: true});

module.exports = UserCategory;