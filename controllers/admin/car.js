const { Car, CarCategory } = require('../../models');

exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.findAll({
            include: [{ model: CarCategory, as: 'CarCategory', attributes: ['name'] }],
            order: [['id', 'ASC']]
        });

        const carsForView = cars.map(car => ({
            ...car.toJSON(),
            category: car.CarCategory ? car.CarCategory.name : 'Uncategorized',
            pricePerDay: car.price_per_day  // Add pricePerDay for views
        }));

        res.render('admin/cars/list-car.ejs', {
            title: 'Car List',
            cars: carsForView
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error loading cars');
    }
};

exports.getAddCar = async (req, res) => {
    try {
        const categories = await CarCategory.findAll();
        res.render('admin/cars/add-car.ejs', {
            title: 'Add New Car',
            categories
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error loading form');
    }
};

// POST add car
exports.postAddCar = async (req, res) => {
    try {
        const img_url = req.file ? `/uploads/cars/${req.file.filename}` : '/customer-assets/img/placeholder.jpg';

        await Car.create({
            brand: req.body.brand,
            model: req.body.model,
            year: parseInt(req.body.year),
            price_per_day: parseFloat(req.body.pricePerDay || req.body.price_per_day),
            category_id: parseInt(req.body.category_id),
            status: req.body.status || req.body.availability || 'Available',
            img_url
        });
        res.redirect('/admin/cars/list');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error adding car');
    }
};

exports.getEditCar = async (req, res) => {
    try {
        const carData = await Car.findByPk(req.params.id, {
            include: [{ model: CarCategory, as: 'CarCategory' }]
        });
        const categories = await CarCategory.findAll();

        if (!carData) {
            return res.status(404).send('Car not found');
        }

        // Format car for edit form
        const oldData = {
            ...carData.toJSON(),
            pricePerDay: carData.price_per_day,
            category: carData.CarCategory ? carData.CarCategory.name : 'Uncategorized'
        };

        res.render('admin/cars/edit-car.ejs', {
            title: 'Edit Car',
            oldData,
            categories,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error loading car');
    }
};

exports.postEditCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);

        if (!car) {
            return res.status(404).send('Car not found');
        }

        // Map category name to category_id
        const categoryMap = {
            'SUV': 2,
            'Sedan': 1,
            'Compact': 4,
            'MPV': 3,
            'Luxury': 5
        };

        // Get category_id from either category name or direct category_id
        let categoryId;
        if (req.body.category) {
            categoryId = categoryMap[req.body.category];
        } else if (req.body.category_id) {
            categoryId = parseInt(req.body.category_id);
        }

        if (!categoryId || isNaN(categoryId)) {
            return res.status(400).send('Invalid category');
        }

        const img_url = req.file ? `/uploads/cars/${req.file.filename}` : car.img_url;

        await car.update({
            brand: req.body.brand,
            model: req.body.model,
            year: parseInt(req.body.year),
            price_per_day: parseFloat(req.body.pricePerDay || req.body.price_per_day),
            category_id: categoryId,
            status: req.body.status || req.body.availability || 'Available',
            img_url
        });

        res.redirect('/admin/cars/list');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error updating car');
    }
};

exports.postDeleteCar = async (req, res) => {
    try {
        await Car.destroy({ where: { id: req.body.id } });
        res.redirect('/admin/cars/list');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error deleting car');
    }
};