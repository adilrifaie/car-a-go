module.exports = (req, res, next) => {
    res.locals.fullName = req.session.fullName;
    next();
}