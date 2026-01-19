const { Review, Booking, Car, User } = require('../../models');

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['firstName', 'lastName', 'email']
                },
                {
                    model: Car,
                    as: 'car',
                    attributes: ['brand', 'model']
                },
                {
                    model: Booking,
                    as: 'booking',
                    attributes: ['startDate', 'endDate']
                }
            ],
            order: [['createdAt', 'DESC']]
        });

        const enrichedReviews = reviews.map(r => {
            const review = r.toJSON();
            return {
                ...review,
                userName: `${review.user.firstName} ${review.user.lastName}`,
                userEmail: review.user.email,
                carName: `${review.car.brand} ${review.car.model}`,
                bookingPeriod: `${formatDate(review.booking.startDate)} - ${formatDate(review.booking.endDate)}`,
                bookingId: review.booking_id,
                formattedCreatedAt: formatDate(review.createdAt)
            };
        });

        res.render('admin/reviews/list-review.ejs', {
            title: 'Review Management',
            reviews: enrichedReviews,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error('Error loading reviews:', error);
        res.status(500).send('Error loading reviews');
    }
};

exports.getReviewDetails = async (req, res) => {
    try {
        const reviewId = req.params.id;

        const review = await Review.findByPk(reviewId, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['firstName', 'lastName', 'email']
                },
                {
                    model: Car,
                    as: 'car',
                    attributes: ['brand', 'model', 'img_url']
                },
                {
                    model: Booking,
                    as: 'booking',
                    attributes: ['startDate', 'endDate', 'totalPrice']
                }
            ]
        });

        if (!review) {
            return res.status(404).send('Review not found');
        }

        res.render('admin/reviews/review-detail.ejs', {
            title: 'Review Details',
            review
        });
    } catch (error) {
        console.error('Error loading review details:', error);
        res.status(500).send('Error loading review');
    }
};

exports.postApproveReview = async (req, res) => {
    try {
        const reviewId = req.body.reviewId || req.body.id;

        await Review.update(
            { status: 'approved', isDisplayed: true },
            { where: { id: reviewId } }
        );

        res.redirect('/admin/reviews/list?message=Review approved successfully');
    } catch (error) {
        console.error('Error approving review:', error);
        res.status(500).send('Error approving review');
    }
};

exports.postRejectReview = async (req, res) => {
    try {
        const reviewId = req.body.reviewId || req.body.id;

        await Review.update(
            { status: 'rejected', isDisplayed: false },
            { where: { id: reviewId } }
        );

        res.redirect('/admin/reviews/list?message=Review rejected');
    } catch (error) {
        console.error('Error rejecting review:', error);
        res.status(500).send('Error rejecting review');
    }
};

exports.postToggleDisplay = async (req, res) => {
    try {
        const reviewId = req.body.reviewId || req.body.id;

        const review = await Review.findByPk(reviewId);
        await review.update({ isDisplayed: !review.isDisplayed });

        res.redirect('/admin/reviews/list?message=Display status updated');
    } catch (error) {
        console.error('Error toggling display:', error);
        res.status(500).send('Error updating display status');
    }
};

exports.postDeleteReview = async (req, res) => {
    try {
        const reviewId = req.body.reviewId || req.body.id;

        await Review.destroy({ where: { id: reviewId } });

        res.redirect('/admin/reviews/list?message=Review deleted successfully');
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).send('Error deleting review');
    }
};