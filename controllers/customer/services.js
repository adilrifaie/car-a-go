exports.getServicePage = (req, res, next) => {
    res.render('customer/services.ejs', {title: 'Our Services', currentPage: 'services'});
}