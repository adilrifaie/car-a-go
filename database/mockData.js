const UserCategory = require('../models/UserCategory');
const User = require('../models/Users');
const CarCategory = require('../models/CarCategory');
const Car = require('../models/Cars');
const Booking = require('../models/Bookings');
const Review = require('../models/Review');
const Blog = require('../models/Blogs');
const bcrypt = require('bcrypt');
const { generateSlug } = require('../helpers/slugField');

const bookingMockData = require('../mocks/booking');
const reviewMockData = require('../mocks/review');
const blogMockData = require('../mocks/blog');
const carMockData = require('../mocks/car');
const userMockData = require('../mocks/user');

async function populate() {
    try {
        console.log('Starting database seeding...');

        // 1. Seed User Categories
        const userCategoryCount = await UserCategory.count();
        if (userCategoryCount === 0) {
            await UserCategory.bulkCreate([
                { id: 1, name: 'Admin' },
                { id: 2, name: 'Staff' },
                { id: 3, name: 'Customer' }
            ]);
            console.log('✓ User categories seeded');
        } else {
            console.log('✓ User categories already exist');
        }

        // 2. Seed Car Categories
        const carCategoryCount = await CarCategory.count();
        if (carCategoryCount === 0) {
            await CarCategory.bulkCreate([
                { category_id: 1, name: 'Sedan' },
                { category_id: 2, name: 'SUV' },
                { category_id: 3, name: 'MPV' },
                { category_id: 4, name: 'Compact' },
                { category_id: 5, name: 'Luxury' }
            ]);
            console.log('✓ Car categories seeded');
        } else {
            console.log('✓ Car categories already exist');
        }

        // 3. Seed Users (from mock data)
        const userCount = await User.count();
        if (userCount === 0) {
            for (const user of userMockData) {
                // Map role to category_id: admin=1, staff=2, customer=3
                let categoryId;
                if (user.role === 'admin') categoryId = 1;
                else if (user.role === 'staff') categoryId = 2;
                else if (user.role === 'customer') categoryId = 3;

                await User.create({
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    password: user.password, // Already hashed in mock
                    category_id: categoryId
                });
            }
            console.log('✓ Users seeded');
        } else {
            console.log('✓ Users already exist');
        }

        // 4. Seed Cars (from mock data)
        const carCount = await Car.count();
        if (carCount === 0) {
            for (const car of carMockData) {
                await Car.create({
                    id: car.id,
                    brand: car.brand,
                    model: car.model,
                    year: car.year,
                    price_per_day: car.pricePerDay,
                    category_id: car.category_id,
                    status: car.status,
                    img_url: car.img_url
                });
            }
            console.log('✓ Cars seeded');
        } else {
            console.log('✓ Cars already exist');
        }

        // 5. Seed Bookings (from mock data)
        const bookingCount = await Booking.count();
        if (bookingCount === 0) {
            await Booking.bulkCreate(bookingMockData, {
                fields: ['id', 'car_id', 'user_id', 'startDate', 'endDate', 'totalDays', 'totalPrice', 'status', 'bookingDate', 'pickupLocation', 'dropoffLocation'],
                validate: false
            });
            console.log('✓ Bookings seeded');
        } else {
            console.log('✓ Bookings already exist');
        }

        // 6. Seed Reviews (from mock data)
        const reviewCount = await Review.count();
        if (reviewCount === 0) {
            await Review.bulkCreate(reviewMockData, {
                fields: ['id', 'booking_id', 'car_id', 'user_id', 'rating', 'comment', 'status', 'isDisplayed', 'createdAt'],
                validate: false
            });
            console.log('✓ Reviews seeded');
        } else {
            console.log('✓ Reviews already exist');
        }

        // 7. Seed Blogs (from mock data)
        const blogCount = await Blog.count();
        if (blogCount === 0) {
            // Map authorId to author_id and generate slugs
            const transformedBlogs = blogMockData.map(blog => ({
                ...blog,
                author_id: blog.authorId,
                slug: generateSlug(blog.title) // Auto-generate slug from title
            }));
            await Blog.bulkCreate(transformedBlogs, {
                fields: ['id', 'author_id', 'title', 'slug', 'excerpt', 'content', 'category', 'featuredImage', 'status', 'views', 'createdAt', 'updatedAt'],
                validate: false
            });
            console.log('✓ Blogs seeded');
        } else {
            console.log('✓ Blogs already exist');
        }

        console.log('\n✓✓✓ Database seeding completed! ✓✓✓');
    } catch (error) {
        console.error('✗ Seeding error:', error);
        throw error;
    }
}

module.exports = populate;
