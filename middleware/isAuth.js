module.exports = (req, res, next) => {
    if (!req.session.isAuth) {
        return res.render('auth/login.ejs', {
            title: 'Login',
            error: null
        });
    }
    next();
}