const { Car, Review, Blog, User, CarCategory, Booking } = require('../../models');
const { Op } = require('sequelize');

function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

exports.getHomePage = async (req, res) => {
    try {
        const cars = await Car.findAll({ // Get all available cars
            where: { status: 'Available' }
        });

        const featuredCarsData = await Car.findAll({// Get featured cars with category and computed properties
            where: { status: 'Available' },
            include: [{ model: CarCategory, as: 'CarCategory' }],
            limit: 6,
            order: [['id', 'ASC']]
        });

        // Format featured cars with computed properties
        const featuredCars = await Promise.all(featuredCarsData.map(async (c) => {
            const car = c.toJSON();

            // Get reviews for this car to calculate average rating
            const carReviews = await Review.findAll({
                where: { car_id: car.id, status: 'approved' },
                attributes: ['rating']
            });

            const avgRating = carReviews.length > 0
                ? (carReviews.reduce((sum, r) => sum + r.rating, 0) / carReviews.length).toFixed(1)
                : 0;

            // Get booking count
            const bookingCount = await Booking.count({
                where: { car_id: car.id }
            });

            return {
                ...car,
                category: car.CarCategory ? car.CarCategory.name : 'Uncategorized',
                pricePerDay: car.price_per_day,
                avgRating: parseFloat(avgRating),
                bookingCount
            };
        }));

        // Get approved reviews with user info
        const reviewsData = await Review.findAll({
            where: {
                status: 'approved',
                isDisplayed: true
            },
            include: [
                { model: User, as: 'user', attributes: ['firstName', 'lastName'] }
            ],
            limit: 6,
            order: [['createdAt', 'DESC']]
        });

        // Format reviews
        const reviews = reviewsData.map(r => {
            const review = r.toJSON();
            const fullName = review.user ? `${review.user.firstName} ${review.user.lastName}` : 'Anonymous';
            return {
                ...review,
                userName: fullName,
                userInitials: fullName.split(' ').map(n => n[0]).join('').toUpperCase()
            };
        });

        // Get published blogs with author
        const blogsData = await Blog.findAll({
            where: { status: 'published' },
            include: [
                {
                    model: User,
                    as: 'author',
                    attributes: ['firstName', 'lastName']
                }
            ],
            limit: 3,
            order: [['createdAt', 'DESC']]
        });

        // Format blogs
        const blogs = blogsData.map(b => {
            const blog = b.toJSON();
            return {
                ...blog,
                authorName: blog.author ? `${blog.author.firstName} ${blog.author.lastName}` : 'Unknown Author',
                formattedCreatedAt: formatDate(blog.createdAt)
            };
        });

        res.render('customer/home.ejs', {
            title: 'Carago - Premium Car Rental Service',
            cars,
            featuredCars,
            reviews,
            blogs,
            currentPage: 'home'
        });
    } catch (error) {
        console.error('Error loading home page:', error);
        res.status(500).send('Error loading home page');
    }
};
