const csurf = require('csurf');

const csrfProtection = csurf();

module.exports = (req, res, next) => {
    const contentType = req.headers['content-type'] || '';

    if (contentType.includes('multipart/form-data')) {
        if (req.csrfToken) {
            res.locals.csrfToken = req.csrfToken();
        }
        return next();
    }

    csrfProtection(req, res, (err) => {
        if (err) return next(err);
        res.locals.csrfToken = req.csrfToken();
        next();
    });
};