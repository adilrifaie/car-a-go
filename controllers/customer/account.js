const { User, Booking, Car, Review } = require('../../models');

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

exports.getAccountPage = async (req, res) => {
    try {
        const userId = req.session.user.id;

        const userBookingsData = await Booking.findAll({
            where: { user_id: userId },
            include: [{ model: Car, as: 'car' }],
            order: [['bookingDate', 'DESC']]
        });

        // Format bookings for view
        const bookings = userBookingsData.map(b => {
            const booking = b.toJSON();
            return {
                ...booking,
                carBrand: booking.car ? booking.car.brand : 'Unknown',
                carModel: booking.car ? booking.car.model : 'Unknown',
                carImage: booking.car ? booking.car.img_url : '/customer-assets/images/default-car.jpg',
                formattedStartDate: formatDate(booking.startDate),
                formattedEndDate: formatDate(booking.endDate),
                canReview: booking.status === 'Completed',
                hasReview: false // Will be set below if review exists
            };
        });

        // Get user reviews
        const userReviews = await Review.findAll({
            where: { user_id: userId },
            include: [
                { model: Car, as: 'car', attributes: ['brand', 'model'] },
                { model: Booking, as: 'booking', attributes: ['startDate', 'endDate'] }
            ],
            order: [['createdAt', 'DESC']]
        });

        // Format reviews for view
        const reviews = userReviews.map(r => {
            const review = r.toJSON();
            return {
                ...review,
                carName: review.car ? `${review.car.brand} ${review.car.model}` : 'Unknown Car',
                formattedCreatedAt: formatDate(review.createdAt)
            };
        });

        // Mark bookings that have reviews
        bookings.forEach(booking => {
            const hasReview = userReviews.some(r => r.booking_id === booking.id);
            booking.hasReview = hasReview;
        });

        // Get success/error messages from query params
        const successMessage = req.query.success || null;
        const errorMessage = req.query.error || null;

        // Map category_id to role name
        const roleMap = {
            1: 'admin',
            2: 'staff',
            3: 'customer'
        };
        const userWithRole = {
            ...req.session.user,
            role: roleMap[req.session.user.category_id] || 'customer',
            userIdFormatted: `#${req.session.user.id.toString().padStart(4, '0')}`
        };

        res.render('customer/account.ejs', {
            title: 'My Account',
            currentPage: 'account',
            user: userWithRole,
            bookings: bookings,
            bookingCount: bookings.length,
            reviews,
            successMessage,
            errorMessage
        });
    } catch (error) {
        console.error('Error loading account:', error);
        res.status(500).send('Error loading account');
    }
};

exports.getBookingForm = async (req, res) => {
    try {
        const carId = req.query.carId;

        // Get all available cars for selection
        const availableCars = await Car.findAll({
            where: { status: 'Available' },
            include: [{ model: require('../../models').CarCategory, as: 'CarCategory' }]
        });

        // Format available cars
        const formattedAvailableCars = availableCars.map(c => ({
            ...c.toJSON(),
            category: c.CarCategory ? c.CarCategory.name : 'Uncategorized',
            pricePerDay: c.price_per_day
        }));

        // If carId is provided, get that specific car, otherwise use null
        let formattedCar = null;
        if (carId) {
            const car = await Car.findByPk(carId, {
                include: [{ model: require('../../models').CarCategory, as: 'CarCategory' }]
            });

            if (car) {
                formattedCar = {
                    ...car.toJSON(),
                    category: car.CarCategory ? car.CarCategory.name : 'Uncategorized',
                    pricePerDay: car.price_per_day
                };
            }
        }

        // Get default dates (today and tomorrow)
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const defaultStartDate = today.toISOString().split('T')[0];
        const defaultEndDate = tomorrow.toISOString().split('T')[0];

        // Map category_id to role name for user display
        const roleMap = {
            1: 'admin',
            2: 'staff',
            3: 'customer'
        };
        const userWithRole = {
            ...req.session.user,
            role: roleMap[req.session.user.category_id] || 'customer',
            userIdFormatted: `#${req.session.user.id.toString().padStart(4, '0')}`
        };

        res.render('customer/booking-form.ejs', {
            title: 'Create Booking',
            currentPage: 'cars',
            user: userWithRole,
            car: formattedCar,
            availableCars: formattedAvailableCars,
            defaultStartDate,
            defaultEndDate,
            csrfToken: req.csrfToken(),
            errorMessage: req.query.error || null,
            successMessage: req.query.success || null
        });
    } catch (error) {
        console.error('Error loading booking form:', error);
        res.status(500).send('Error loading booking form');
    }
};

exports.postCreateBooking = async (req, res) => {
    try {
        const { carId, startDate, endDate, pickupLocation, dropoffLocation } = req.body;
        const userId = req.session.user.id;

        console.log('Booking request:', { carId, startDate, endDate, pickupLocation, dropoffLocation, userId });

        if (!carId) { // Validate carId
            return res.status(400).send('Car ID is required');
        }

        const car = await Car.findByPk(carId); // Find the car

        if (!car) {
            console.error('Car not found with ID:', carId);
            return res.status(404).send('Car not found. Please select a valid car.');
        }

        if (car.status !== 'Available') {
            return res.status(400).send('This car is not available for booking');
        }

        // Calculate total days and price
        const start = new Date(startDate);
        const end = new Date(endDate);
        const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

        if (totalDays <= 0) {
            return res.status(400).send('End date must be after start date');
        }

        const totalPrice = totalDays * parseFloat(car.price_per_day);

        await Booking.create({
            car_id: carId,
            user_id: userId,
            startDate,
            endDate,
            totalDays,
            totalPrice,
            status: 'Pending',
            bookingDate: new Date(),
            pickupLocation,
            dropoffLocation
        });

        res.redirect('/account?success=Booking created successfully');
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).send(`Error creating booking: ${error.message}`);
    }
};
