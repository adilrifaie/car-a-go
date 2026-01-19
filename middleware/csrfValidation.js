const csurf = require('csurf');

const csrfProtection = csurf();

module.exports = (req, res, next) => {
    csrfProtection(req, res, next);
};
