const { DataTypes } = require('sequelize');
const db = require('../database/config');

const RememberToken = db.define('RememberToken', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    token: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, { timestamps: true });

module.exports = RememberToken;
