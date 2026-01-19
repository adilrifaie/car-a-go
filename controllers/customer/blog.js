const { Blog, User } = require('../../models');

exports.getBlogPage = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 9;
        const offset = (page - 1) * limit;

        // Get total count of published blogs
        const totalBlogs = await Blog.count({
            where: { status: 'published' }
        });

        const totalPages = Math.ceil(totalBlogs / limit);

        // Get blogs for current page
        const blogsData = await Blog.findAll({
            where: { status: 'published' },
            include: [{ model: User, as: 'author', attributes: ['firstName', 'lastName'] }],
            order: [['createdAt', 'DESC']],
            limit,
            offset
        });

        // Format blogs for view
        const blogs = blogsData.map(b => {
            const blog = b.toJSON();
            return {
                ...blog,
                authorName: blog.author ? `${blog.author.firstName} ${blog.author.lastName}` : 'Unknown Author',
                formattedCreatedAt: formatDate(blog.createdAt)
            };
        });

        res.render('customer/blog.ejs', {
            title: 'Blog',
            currentPage: 'blog',
            blogs,
            page,
            totalPages,
            totalBlogs
        });
    } catch (error) {
        console.error('Error loading blogs:', error);
        res.status(500).send('Error loading blogs');
    }
};

function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

exports.getBlogDetail = async (req, res) => {
    try {
        const blogData = await Blog.findOne({
            where: { slug: req.params.slug, status: 'published' },
            include: [{ model: User, as: 'author', attributes: ['firstName', 'lastName'] }]
        });

        if (!blogData) {
            return res.status(404).render('customer/404.ejs', {
                title: '404 - Blog Not Found',
                currentPage: '404'
            });
        }

        // Increment view count
        await blogData.increment('views');

        // Format blog for view
        const blog = blogData.toJSON();
        blog.authorName = blog.author ? `${blog.author.firstName} ${blog.author.lastName}` : 'Unknown Author';
        blog.formattedCreatedAt = formatDate(blog.createdAt);

        // Get related blogs (same category or recent)
        const relatedBlogsData = await Blog.findAll({
            where: {
                status: 'published',
                id: { [require('sequelize').Op.ne]: blog.id }
            },
            include: [{ model: User, as: 'author', attributes: ['firstName', 'lastName'] }],
            limit: 3,
            order: [['createdAt', 'DESC']]
        });

        // Format related blogs
        const relatedBlogs = relatedBlogsData.map(b => {
            const relBlog = b.toJSON();
            return {
                ...relBlog,
                authorName: relBlog.author ? `${relBlog.author.firstName} ${relBlog.author.lastName}` : 'Unknown Author',
                formattedCreatedAt: formatDate(relBlog.createdAt)
            };
        });

        res.render('customer/blog-detail.ejs', {
            title: blog.title,
            currentPage: 'blog',
            blog,
            relatedBlogs
        });
    } catch (error) {
        console.error('Error loading blog:', error);
        res.status(500).send('Error loading blog');
    }
};
