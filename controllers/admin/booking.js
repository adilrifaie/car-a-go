const { Booking, Car, User, CarCategory } = require('../../models');

exports.getAllBookings = async (req, res) => {
    try {
        const bookingsData = await Booking.findAll({
            include: [
                {
                    model: Car,
                    as: 'car',
                    attributes: ['brand', 'model', 'img_url', 'price_per_day'],
                    include: [{ model: CarCategory, as: 'CarCategory', attributes: ['name'] }]
                },
                {
                    model: User,
                    as: 'user',
                    attributes: ['firstName', 'lastName', 'email', 'category_id']
                }
            ],
            order: [['createdAt', 'DESC']]
        });

        const bookings = bookingsData.map(b => {
            const booking = b.toJSON();
            const roleMap = { 1: 'admin', 2: 'staff', 3: 'customer' };
            return {
                ...booking,
                carBrand: booking.car ? booking.car.brand : 'Unknown',
                carModel: booking.car ? booking.car.model : 'Unknown',
                carImage: booking.car ? booking.car.img_url : '/admin-assets/img/default-car.jpg',
                carCategory: booking.car && booking.car.CarCategory ? booking.car.CarCategory.name : 'Uncategorized',
                userName: booking.user ? `${booking.user.firstName} ${booking.user.lastName}` : 'Unknown User',
                userRole: booking.user ? roleMap[booking.user.category_id] || 'customer' : 'unknown',
                userId: booking.user ? booking.user.id : null,
                dateRange: `${new Date(booking.startDate).toLocaleDateString()} - ${new Date(booking.endDate).toLocaleDateString()}`
            };
        });

        res.render('admin/bookings/list-booking.ejs', {
            title: 'Booking Management',
            bookings,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error('Error loading bookings:', error);
        res.status(500).send('Error loading bookings');
    }
};

exports.getAddBooking = async (req, res) => {
    try {
        const cars = await Car.findAll({ where: { status: 'Available' } });
        const users = await User.findAll({ where: { category_id: 3 } }); // Only customers

        res.render('admin/bookings/add-booking.ejs', {
            title: 'Add New Booking',
            cars,
            users,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error('Error loading add booking form:', error);
        res.status(500).send('Error loading form');
    }
};

exports.postAddBooking = async (req, res) => {
    try {
        const { carId, userId, startDate, endDate, status, pickupLocation, dropoffLocation } = req.body;

        const start = new Date(startDate);
        const end = new Date(endDate);
        const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

        const car = await Car.findByPk(carId);
        const totalPrice = totalDays * parseFloat(car.price_per_day);

        await Booking.create({
            car_id: carId,
            user_id: userId,
            startDate,
            endDate,
            totalDays,
            totalPrice,
            status: status || 'Pending',
            bookingDate: new Date(),
            pickupLocation,
            dropoffLocation
        });

        res.redirect('/admin/bookings/list?message=Booking added successfully');
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send('Error adding booking');
    }
};

exports.getEditBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id, {
            include: [
                { model: Car, as: 'car' },
                { model: User, as: 'user' }
            ]
        });

        if (!booking) {
            return res.redirect('/admin/bookings/list');
        }

        const cars = await Car.findAll();
        const users = await User.findAll({ where: { category_id: 3 } });

        res.render('admin/bookings/edit-booking.ejs', {
            title: 'Edit Booking',
            oldData: booking,
            cars,
            users,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error('Error loading edit booking:', error);
        res.status(500).send('Error loading form');
    }
};

exports.postEditBooking = async (req, res) => {
    try {
        const { carId, userId, startDate, endDate, status, pickupLocation, dropoffLocation } = req.body;

        const start = new Date(startDate);
        const end = new Date(endDate);
        const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

        const car = await Car.findByPk(carId);
        const totalPrice = totalDays * parseFloat(car.price_per_day);

        await Booking.update({
            car_id: carId,
            user_id: userId,
            startDate,
            endDate,
            totalDays,
            totalPrice,
            status,
            pickupLocation,
            dropoffLocation
        }, {
            where: { id: req.params.id }
        });

        res.redirect('/admin/bookings/list?message=Booking updated successfully');
    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(500).send('Error updating booking');
    }
};

exports.postDeleteBooking = async (req, res) => {
    try {
        await Booking.destroy({ where: { id: req.body.bookingId } });
        res.redirect('/admin/bookings/list?message=Booking deleted successfully');
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).send('Error deleting booking');
    }
};
