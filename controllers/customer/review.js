const { Review, Booking, Car, User } = require('../../models');

exports.postSubmitReview = async (req, res) => {
    try {
        const { bookingId, rating, comment } = req.body;
        const userId = req.session.user.id;

        // Validation checks
        const booking = await Booking.findOne({
            where: {
                id: bookingId,
                user_id: userId,
                status: 'Completed'
            }
        });

        if (!booking) {
            return res.status(400).send('Invalid booking or booking not completed');
        }

        // Check if review already exists
        const existingReview = await Review.findOne({ where: { booking_id: bookingId } });
        if (existingReview) {
            return res.status(400).send('Review already submitted for this booking');
        }

        // Create review
        await Review.create({
            booking_id: bookingId,
            car_id: booking.car_id,
            user_id: userId,
            rating: parseInt(rating),
            comment,
            status: 'pending',
            isDisplayed: false
        });

        res.redirect('/customer/bookings?message=Review submitted successfully');
    } catch (error) {
        console.error('Error submitting review:', error);
        res.status(500).send('Error submitting review');
    }
};

exports.getMyReviews = async (req, res) => {
    try {
        const userId = req.session.user.id;

        const reviews = await Review.findAll({
            where: { user_id: userId },
            include: [
                {
                    model: Car,
                    as: 'car',
                    attributes: ['brand', 'model', 'img_url']
                },
                {
                    model: Booking,
                    as: 'booking',
                    attributes: ['startDate', 'endDate']
                }
            ],
            order: [['createdAt', 'DESC']]
        });

        res.render('customer/my-reviews', { reviews, title: 'My Reviews' });
    } catch (error) {
        console.error('Error loading reviews:', error);
        res.status(500).send('Error loading reviews');
    }
};