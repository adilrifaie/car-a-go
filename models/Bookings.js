const { DataTypes } = require('sequelize');
const db = require('../database/config');

const Bookings = db.define('Bookings', {
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
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    totalDays: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'Pending',
        allowNull: false
        // Values: 'Pending', 'Approved', 'Cancelled', 'Completed'
    },
    bookingDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    pickupLocation: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    dropoffLocation: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'bookings',
    timestamps: true
});

module.exports = Bookings;
