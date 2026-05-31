const { DataTypes } = require('sequelize');
const db = require('../database/config');

const GalleryImage = db.define('GalleryImage', {
    gallery_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Galleries', key: 'id' }
    },
    img_url: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    caption: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
}, { timestamps: true });

module.exports = GalleryImage;
