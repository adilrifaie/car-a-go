const { DataTypes } = require('sequelize');
const db = require('../database/config');

const Review = db.define('Review', {
    booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'bookings',
            key: 'id'
        }
    },
    car_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Cars',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [50, 500]  // Between 50 and 500 characters
        }
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'pending',
        allowNull: false
        // Values: 'pending', 'approved', 'rejected'
    },
    isDisplayed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, {
    tableName: 'reviews',
    timestamps: true  // Creates createdAt and updatedAt automatically
});

module.exports = Review;
