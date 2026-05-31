const { DataTypes } = require('sequelize');
const db = require('../database/config');

const Gallery = db.define('Gallery', {
    title: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    coverImage: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('draft', 'published'),
        allowNull: false,
        defaultValue: 'draft',
    }
}, { timestamps: true });

module.exports = Gallery;
