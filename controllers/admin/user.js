const { User, UserCategory } = require('../../models');
const bcrypt = require('bcrypt');

exports.getAllUsers = async (req, res) => {
    try {
        const usersData = await User.findAll({
            include: [{ model: UserCategory, as: 'category', attributes: ['name'] }],
            order: [['id', 'ASC']]
        });

        // Format users with role property
        const users = usersData.map(u => {
            const user = u.toJSON();
            return {
                ...user,
                role: user.category ? user.category.name.toLowerCase() : 'customer'
            };
        });

        res.render('admin/users/list-user.ejs', {
            title: 'User Management',
            users,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error('Error loading users:', error);
        res.status(500).send('Error loading users');
    }
};

exports.getAddUser = async (req, res) => {
    try {
        const categories = await UserCategory.findAll();

        res.render('admin/users/add-user.ejs', {
            title: 'Add New User',
            categories,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error('Error loading add user form:', error);
        res.status(500).send('Error loading form');
    }
};

exports.postAddUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role, category_id } = req.body;

        // Map role name to category_id
        const roleMap = {
            'admin': 1,
            'staff': 2,
            'customer': 3
        };

        const categoryId = role ? roleMap[role.toLowerCase()] : parseInt(category_id); // Use role if provided (from dropdown), otherwise use category_id

        if (!categoryId || isNaN(categoryId)) {
            return res.status(400).send('Invalid role or category');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            category_id: categoryId
        });

        res.redirect('/admin/users/list?message=User added successfully');
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).send('Error adding user');
    }
};

exports.getEditUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [{ model: UserCategory, as: 'category' }]
        });

        if (!user) {
            return res.redirect('/admin/users/list');
        }

        const categories = await UserCategory.findAll();

        res.render('admin/users/edit-user.ejs', {
            title: 'Edit User',
            oldData: user,
            categories,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error('Error loading edit user:', error);
        res.status(500).send('Error loading form');
    }
};

exports.postEditUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role, category_id } = req.body;

        // Map role name to category_id
        const roleMap = {
            'admin': 1,
            'staff': 2,
            'customer': 3
        };

        const categoryId = role ? roleMap[role.toLowerCase()] : parseInt(category_id); // Use role if provided (from dropdown), otherwise use category_id

        if (!categoryId || isNaN(categoryId)) {
            return res.status(400).send('Invalid role or category');
        }

        const updateData = {
            firstName,
            lastName,
            email,
            category_id: categoryId
        };

        if (password && password.trim() !== '') {
            updateData.password = await bcrypt.hash(password, 10);
        }

        await User.update(updateData, {
            where: { id: req.params.id }
        });

        res.redirect('/admin/users/list?message=User updated successfully');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Error updating user');
    }
};

exports.postDeleteUser = async (req, res) => {
    try {
        await User.destroy({ where: { id: req.body.userId } });
        res.redirect('/admin/users/list?message=User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Error deleting user');
    }
};
