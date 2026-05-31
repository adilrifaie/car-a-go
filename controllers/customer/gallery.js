const { Gallery, GalleryImage } = require('../../models');

exports.getGalleryPage = async (req, res) => {
    try {
        const galleries = await Gallery.findAll({
            where: { status: 'published' },
            include: [{ model: GalleryImage, as: 'images', limit: 1 }],
            order: [['createdAt', 'DESC']]
        });
        res.render('customer/gallery.ejs', {
            title: 'Gallery - CaraGo',
            currentPage: 'gallery',
            galleries
        });
    } catch (error) {
        console.error('Error loading gallery page:', error);
        res.status(500).send('Error loading gallery');
    }
};

exports.getGalleryDetail = async (req, res) => {
    try {
        const gallery = await Gallery.findOne({
            where: { id: req.params.id, status: 'published' },
            include: [{ model: GalleryImage, as: 'images' }]
        });
        if (!gallery) return res.redirect('/gallery');
        res.render('customer/gallery-detail.ejs', {
            title: `${gallery.title} - CaraGo`,
            currentPage: 'gallery',
            gallery
        });
    } catch (error) {
        console.error('Error loading gallery detail:', error);
        res.status(500).send('Error loading gallery');
    }
};
