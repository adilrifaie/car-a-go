const { DataTypes } = require('sequelize');
const db = require('../database/config');

const CarCategory = db.define('CarCategory', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
}, {timestamps: true});

module.exports = CarCategory;