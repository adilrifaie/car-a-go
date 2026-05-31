const { Gallery, GalleryImage } = require('../../models');
const { deleteOldImage } = require('../../middleware/uploadConfig');

exports.getAllGalleries = async (req, res) => {
    try {
        const galleries = await Gallery.findAll({
            include: [{ model: GalleryImage, as: 'images' }],
            order: [['createdAt', 'DESC']]
        });
        res.render('admin/galleries/list-gallery.ejs', {
            title: 'Manage Galleries',
            currentPage: 'galleries',
            galleries
        });
    } catch (error) {
        console.error('Error fetching galleries:', error);
        res.status(500).send('Error loading galleries');
    }
};

exports.getAddGallery = (req, res) => {
    res.render('admin/galleries/add-gallery.ejs', {
        title: 'Add Gallery',
        currentPage: 'galleries',
        csrfToken: res.locals.csrfToken
    });
};

exports.postAddGallery = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const coverImage = req.file ? `/uploads/galleries/${req.file.filename}` : null;
        await Gallery.create({ title, description, coverImage, status: status || 'draft' });
        res.redirect('/admin/galleries');
    } catch (error) {
        console.error('Error creating gallery:', error);
        res.status(500).send('Error creating gallery');
    }
};

exports.getEditGallery = async (req, res) => {
    try {
        const gallery = await Gallery.findByPk(req.params.id, {
            include: [{ model: GalleryImage, as: 'images' }]
        });
        if (!gallery) return res.redirect('/admin/galleries');
        res.render('admin/galleries/edit-gallery.ejs', {
            title: 'Edit Gallery',
            currentPage: 'galleries',
            gallery,
            csrfToken: res.locals.csrfToken
        });
    } catch (error) {
        console.error('Error fetching gallery:', error);
        res.status(500).send('Error loading gallery');
    }
};

exports.postEditGallery = async (req, res) => {
    try {
        const gallery = await Gallery.findByPk(req.params.id);
        if (!gallery) return res.redirect('/admin/galleries');

        const { title, description, status } = req.body;
        const updateData = { title, description, status };

        if (req.file) {
            if (gallery.coverImage) deleteOldImage(gallery.coverImage);
            updateData.coverImage = `/uploads/galleries/${req.file.filename}`;
        }

        await gallery.update(updateData);
        res.redirect('/admin/galleries');
    } catch (error) {
        console.error('Error updating gallery:', error);
        res.status(500).send('Error updating gallery');
    }
};

exports.postDeleteGallery = async (req, res) => {
    try {
        const gallery = await Gallery.findByPk(req.body.id, {
            include: [{ model: GalleryImage, as: 'images' }]
        });
        if (!gallery) return res.redirect('/admin/galleries');

        // Delete all images from disk
        if (gallery.coverImage) deleteOldImage(gallery.coverImage);
        for (const img of gallery.images) {
            deleteOldImage(img.img_url);
        }
        await GalleryImage.destroy({ where: { gallery_id: gallery.id } });
        await gallery.destroy();
        res.redirect('/admin/galleries');
    } catch (error) {
        console.error('Error deleting gallery:', error);
        res.status(500).send('Error deleting gallery');
    }
};

exports.postAddImage = async (req, res) => {
    try {
        const { gallery_id, caption } = req.body;
        if (!req.file) return res.redirect(`/admin/galleries/edit/${gallery_id}`);
        const img_url = `/uploads/galleries/${req.file.filename}`;
        await GalleryImage.create({ gallery_id, img_url, caption });
        res.redirect(`/admin/galleries/edit/${gallery_id}`);
    } catch (error) {
        console.error('Error adding image:', error);
        res.status(500).send('Error adding image');
    }
};

exports.postDeleteImage = async (req, res) => {
    try {
        const image = await GalleryImage.findByPk(req.body.id);
        if (!image) return res.redirect('/admin/galleries');
        const galleryId = image.gallery_id;
        deleteOldImage(image.img_url);
        await image.destroy();
        res.redirect(`/admin/galleries/edit/${galleryId}`);
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).send('Error deleting image');
    }
};
