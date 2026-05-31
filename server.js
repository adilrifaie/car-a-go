require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server: SocketIOServer } = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sessionConfig = require('./middleware/sessionConfig');
const csurf = require('csurf');
const locals = require('./middleware/locals');
const visitorTracker = require('./middleware/visitorTracker');

const db = require('./database/config');
const User = require('./models/Users');
const Car = require('./models/Cars');
const CarCategory = require('./models/CarCategory');
const UserCategory = require('./models/UserCategory');
const Booking = require('./models/Bookings');
const Review = require('./models/Review');
const Blog = require('./models/Blogs');
const RememberToken = require('./models/RememberToken');
const VisitorLog = require('./models/VisitorLog');
const Gallery = require('./models/Gallery');
const GalleryImage = require('./models/GalleryImage');

// Admin routes
const adminRoutes = require('./routers/admin/admin');
const carAdminRoutes = require('./routers/admin/car');
const bookingAdminRoutes = require('./routers/admin/booking');
const blogAdminRoutes = require('./routers/admin/blog');
const userAdminRoutes = require('./routers/admin/user');
const reviewAdminRoutes = require('./routers/admin/review');
const galleryAdminRoutes = require('./routers/admin/gallery');

// Customer routes
const homeRoutes = require('./routers/customer/home');
const carRoutes = require('./routers/customer/car');
const servicesRoutes = require('./routers/customer/services');
const aboutRoutes = require('./routers/customer/about');
const blogRoutes = require('./routers/customer/blog');
const accountRoutes = require('./routers/customer/account');
const reviewRoutes = require('./routers/customer/review');
const galleryRoutes = require('./routers/customer/gallery');

// Auth routes
const authRoutes = require('./routers/auth/auth');

const app = express();

// Middleware setup
app.set("view engine","ejs")
app.use("/admin-assets", express.static(path.join(__dirname, "./public/admin-assets")));
app.use("/customer-assets", express.static(path.join(__dirname, "./public/customer-assets")));
app.use("/uploads", express.static(path.join(__dirname, "./public/uploads")));

app.use(sessionConfig); // Session middleware
app.use(cookieParser()); // Cookie parser middleware

// Conditional body parsing - skip for multipart/form-data (multer will handle it)
app.use((req, res, next) => {
    const contentType = req.headers['content-type'] || '';
    if (contentType.includes('multipart/form-data')) {
        // Skip body-parser for multipart forms (multer will parse them)
        return next();
    }
    bodyParser.urlencoded({ extended: true })(req, res, next);
});
app.use(bodyParser.json()); // Body parser for JSON requests (AJAX)

// CSRF protection middleware - skip for multipart forms (they'll be validated after multer)
app.use((req, res, next) => {
    const contentType = req.headers['content-type'] || '';
    if (contentType.includes('multipart/form-data')) {
        // Skip CSRF validation for multipart - will be handled by route-level middleware after multer
        return next();
    }
    csurf()(req, res, next);
});
app.use(locals); // Middleware to set local variables for views
app.use(visitorTracker);

// Route setup for Admin and Customer
app.use('/admin', adminRoutes);
app.use('/admin/cars', carAdminRoutes);
app.use('/admin/bookings', bookingAdminRoutes);
app.use('/admin/blogs', blogAdminRoutes);
app.use('/admin/users', userAdminRoutes);
app.use('/admin/reviews', reviewAdminRoutes);
app.use('/admin/galleries', galleryAdminRoutes);

app.use('/', homeRoutes);
app.use('/cars', carRoutes);
app.use('/services', servicesRoutes);
app.use('/about', aboutRoutes);
app.use('/blog', blogRoutes);
app.use('/account', accountRoutes);
app.use('/review', reviewRoutes);
app.use('/gallery', galleryRoutes);

// Auth routes
app.use('/auth', authRoutes);

// Relationship setup
// UserCategory ↔ User (One-to-Many)
UserCategory.hasMany(User, {
    foreignKey: 'category_id',
    as: 'users'
});
User.belongsTo(UserCategory, {
    foreignKey: 'category_id',
    as: 'category'
});

// CarCategory ↔ Car (One-to-Many)
CarCategory.hasMany(Car, {
    foreignKey: 'category_id',
    as: 'cars'
});
Car.belongsTo(CarCategory, {
    foreignKey: 'category_id',
    as: 'CarCategory'
});

// User ↔ Booking (One-to-Many)
User.hasMany(Booking, {
    foreignKey: 'user_id',
    as: 'bookings'
});
Booking.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

// Car ↔ Booking (One-to-Many)
Car.hasMany(Booking, {
    foreignKey: 'car_id',
    as: 'bookings'
});
Booking.belongsTo(Car, {
    foreignKey: 'car_id',
    as: 'car'
});

// Booking ↔ Review (One-to-One)
Booking.hasOne(Review, {
    foreignKey: 'booking_id',
    as: 'review'
});
Review.belongsTo(Booking, {
    foreignKey: 'booking_id',
    as: 'booking'
});

// Car ↔ Review (One-to-Many)
Car.hasMany(Review, {
    foreignKey: 'car_id',
    as: 'reviews'
});
Review.belongsTo(Car, {
    foreignKey: 'car_id',
    as: 'car'
});

// User ↔ Review (One-to-Many)
User.hasMany(Review, {
    foreignKey: 'user_id',
    as: 'reviews'
});
Review.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

// User ↔ Blog (One-to-Many)
User.hasMany(Blog, {
    foreignKey: 'author_id',
    as: 'blogs'
});
Blog.belongsTo(User, {
    foreignKey: 'author_id',
    as: 'author'
});

// User ↔ RememberToken (One-to-Many)
User.hasMany(RememberToken, {
    foreignKey: 'user_id',
    as: 'rememberTokens'
});
RememberToken.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

// Gallery ↔ GalleryImage (One-to-Many)
Gallery.hasMany(GalleryImage, { foreignKey: 'gallery_id', as: 'images' });
GalleryImage.belongsTo(Gallery, { foreignKey: 'gallery_id', as: 'gallery' });

console.log('✓ Model relationships defined');

// Sync database
(async () => {
    try {
        await db.sync();
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
})();

// Logging middleware
app.use((req, res, next) => {
    // Middleware for logging
    console.log(`${req.method} ${req.url}`);
    next();    
});


// Middleware for handling 404
app.use((req, res, next) => {
    // Detect if request is for admin route
    const isAdminRoute = req.originalUrl.startsWith('/admin');

    // Set status code
    res.status(404);

    // Render appropriate 404 page based on context
    if (isAdminRoute) {
        res.render('admin/404.ejs', {
            title: '404 - Page Not Found',
            currentPage: '404'
        });
    } else {
        res.render('customer/404.ejs', {
            title: '404 - Page Not Found',
            currentPage: '404'
        });
    }
});

// Middleware for error handling
app.use((err, req, res, next) => {
    console.error('ERROR:', err.message);
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

const httpServer = http.createServer(app);
const io = new SocketIOServer(httpServer);

let onlineUsers = 0;

io.on('connection', (socket) => {
    onlineUsers++;
    io.emit('onlineCount', onlineUsers);
    socket.on('disconnect', () => {
        onlineUsers--;
        io.emit('onlineCount', onlineUsers);
    });
});

// Make io accessible to controllers if needed
app.set('io', io);

httpServer.listen(1620, () => {
    console.log('Server is running on port 1620');
});