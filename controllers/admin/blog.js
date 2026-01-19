const { Blog, User } = require('../../models');
const { generateUniqueSlug } = require('../../helpers/slugField');
const { deleteOldImage } = require('../../middleware/uploadConfig');

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            include: [{
                model: User,
                as: 'author',
                attributes: ['firstName', 'lastName']
            }],
            order: [['createdAt', 'DESC']]
        });

        const enrichedBlogs = blogs.map(b => {
            const blog = b.toJSON();
            return {
                ...blog,
                authorName: `${blog.author.firstName} ${blog.author.lastName}`,
                formattedDate: formatDate(blog.createdAt)
            };
        });

        res.render('admin/blogs/list-blog.ejs', {
            title: 'Blog Management',
            blogs: enrichedBlogs,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error('Error loading blogs:', error);
        res.status(500).send('Error loading blogs');
    }
};

exports.getAddBlog = (req, res) => {
    res.render('admin/blogs/add-blog.ejs', {
        title: 'Add New Blog',
        csrfToken: req.csrfToken()
    });
};

exports.postAddBlog = async (req, res) => {
    try {
        const { title, excerpt, content, category, status } = req.body;
        const authorId = req.session.user.id;

        // Generate unique slug from title
        const slug = await generateUniqueSlug(title, Blog);

        // Handle featured image
        const featuredImage = req.file ? `/uploads/blogs/${req.file.filename}` : null;

        await Blog.create({
            title,
            slug,
            excerpt,
            content,
            author_id: authorId,
            category,
            featuredImage,
            status: status || 'draft',
            views: 0
        });

        res.redirect('/admin/blogs/list?message=Blog created successfully');
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).send('Error creating blog');
    }
};

exports.getEditBlog = async (req, res) => {
    try {
        const blogId = req.params.id;

        const blog = await Blog.findByPk(blogId, {
            include: [{
                model: User,
                as: 'author',
                attributes: ['firstName', 'lastName']
            }]
        });

        if (!blog) {
            return res.status(404).send('Blog not found');
        }

        res.render('admin/blogs/edit-blog.ejs', {
            title: 'Edit Blog',
            blog,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error('Error loading blog:', error);
        res.status(500).send('Error loading blog');
    }
};

exports.postEditBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const { title, excerpt, content, category, status } = req.body;

        const blog = await Blog.findByPk(blogId);
        if (!blog) {
            return res.status(404).send('Blog not found');
        }

        let slug = blog.slug;
        if (title !== blog.title) {
            slug = await generateUniqueSlug(title, Blog, blogId);
        }

        let featuredImage = blog.featuredImage;
        if (req.file) {
            if (blog.featuredImage) {
                deleteOldImage(blog.featuredImage);// Delete old image if exists
            }
            featuredImage = `/uploads/blogs/${req.file.filename}`;
        }

        await blog.update({
            title,
            slug,
            excerpt,
            content,
            category,
            featuredImage,
            status
        });

        res.redirect('/admin/blogs/list?message=Blog updated successfully');
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).send('Error updating blog');
    }
};

exports.postDeleteBlog = async (req, res) => {
    try {
        const blogId = req.body.blogId || req.body.id;

        const blog = await Blog.findByPk(blogId);
        if (!blog) {
            return res.status(404).send('Blog not found');
        }

        if (blog.featuredImage) {
            deleteOldImage(blog.featuredImage);// Delete old image if exists
        }

        await blog.destroy();

        res.redirect('/admin/blogs/list?message=Blog deleted successfully');
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).send('Error deleting blog');
    }
};

exports.toggleStatus = async (req, res) => {
    try {
        const blogId = req.params.id;

        const blog = await Blog.findByPk(blogId);
        const newStatus = blog.status === 'published' ? 'draft' : 'published';

        await blog.update({ status: newStatus });

        res.redirect('/admin/blogs/list?message=Blog status updated');
    } catch (error) {
        console.error('Error toggling status:', error);
        res.status(500).send('Error updating status');
    }
};