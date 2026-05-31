const { DataTypes } = require('sequelize');
const db = require('../database/config');

const VisitorLog = db.define('VisitorLog', {
    ipAddress: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    userAgent: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    visitedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
}, { timestamps: false });

module.exports = VisitorLog;
