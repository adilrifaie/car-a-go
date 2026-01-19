exports.getAboutPage = (req, res, next) => {
    res.render('customer/about.ejs', {title: 'About Us', currentPage: 'about'});
}