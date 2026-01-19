const { DataTypes } = require('sequelize');
const db = require('../database/config');

const Cars = db.define('Cars', {
    brand: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price_per_day: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'Available',
        allowNull: false,
        // Values: 'Available', 'Rented', 'Maintenance'
    },
    img_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
}, {timestamps: true});

module.exports = Cars;
