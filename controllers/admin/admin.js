exports.getDashboard = (req, res) => {
    res.render('admin/dashboard-simple.ejs', {
        title: 'Admin Dashboard'
    });
};