const { Car, CarCategory } = require('../../models');

exports.getAllCars = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const carsPerPage = 6;
        const offset = (page - 1) * carsPerPage;

        // Get total count
        const totalCars = await Car.count({
            where: { status: 'Available' }
        });

        const totalPages = Math.ceil(totalCars / carsPerPage);

        // Get paginated cars
        const carsData = await Car.findAll({
            where: { status: 'Available' },
            include: [{ model: CarCategory, as: 'CarCategory', attributes: ['name'] }],
            limit: carsPerPage,
            offset: offset,
            order: [['id', 'ASC']]
        });

        // Format cars for view
        const cars = carsData.map(c => {
            const car = c.toJSON();
            return {
                ...car,
                category: car.CarCategory ? car.CarCategory.name : 'Uncategorized',
                pricePerDay: car.price_per_day
            };
        });

        res.render('customer/car.ejs', {
            title: 'Browse Our Cars',
            cars: cars,
            currentPage: 'cars',
            page: page,
            totalPages: totalPages
        });
    } catch (error) {
        console.error('Error loading cars:', error);
        res.status(500).send('Error loading cars');
    }
};
