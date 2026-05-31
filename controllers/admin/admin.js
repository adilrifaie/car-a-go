const { VisitorLog, Booking, User, Car } = require('../../models');
const { Op, fn, col } = require('sequelize');

exports.getDashboard = async (req, res) => {
    try {
        const totalVisitors = await VisitorLog.count();

        const revenueResult = await Booking.findOne({
            attributes: [[fn('SUM', col('totalPrice')), 'total']],
            where: { status: 'Completed' },
            raw: true
        });
        const totalRevenue = parseFloat(revenueResult?.total || 0).toFixed(2);

        const pendingBookings = await Booking.count({ where: { status: 'Pending' } });
        const totalUsers = await User.count();
        const totalCars = await Car.count();

        res.render('admin/dashboard-simple.ejs', {
            title: 'Admin Dashboard',
            totalVisitors,
            totalRevenue,
            pendingBookings,
            totalUsers,
            totalCars
        });
    } catch (error) {
        console.error('Error loading admin dashboard:', error);
        res.status(500).send('Error loading dashboard');
    }
};
