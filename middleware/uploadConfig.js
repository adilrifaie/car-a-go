const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

// Helper function to generate unique filename
const generateUniqueFilename = (originalname) => {
    const timestamp = Date.now();
    const randomString = crypto.randomBytes(8).toString('hex');
    const ext = path.extname(originalname);
    const nameWithoutExt = path.basename(originalname, ext);

    // Sanitize original filename
    const sanitized = nameWithoutExt.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

    return `${timestamp}-${randomString}-${sanitized}${ext}`;
};

// Helper function to delete old image file
const deleteOldImage = (imagePath) => {
    // Don't delete if it's a default/placeholder image from static assets
    if (!imagePath || !imagePath.startsWith('/uploads/')) {
        return;
    }

    // Convert web path to filesystem path
    const filePath = path.join(__dirname, '..', 'public', imagePath);

    // Check if file exists and delete it
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (!err) {
            fs.unlink(filePath, (unlinkErr) => {
                if (unlinkErr) {
                    console.error(`Failed to delete old image: ${filePath}`, unlinkErr);
                } else {
                    console.log(`Successfully deleted old image: ${filePath}`);
                }
            });
        }
    });
};

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Determine destination based on field name
        let uploadPath;

        if (file.fieldname === 'carImage') {
            uploadPath = path.join(__dirname, '..', 'public', 'uploads', 'cars');
        } else if (file.fieldname === 'featuredImage') {
            uploadPath = path.join(__dirname, '..', 'public', 'uploads', 'blogs');
        } else if (file.fieldname === 'coverImage' || file.fieldname === 'galleryImage') {
            uploadPath = path.join(__dirname, '..', 'public', 'uploads', 'galleries');
        } else {
            uploadPath = path.join(__dirname, '..', 'public', 'uploads');
        }

        // Ensure directory exists
        fs.mkdirSync(uploadPath, { recursive: true });

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueFilename = generateUniqueFilename(file.originalname);
        cb(null, uniqueFilename);
    }
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
    // Accept image files only
    const allowedMimeTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
        'image/avif'
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, WebP, and AVIF images are allowed.'), false);
    }
};

// Create multer upload instance
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

module.exports = {
    upload,
    deleteOldImage
};
