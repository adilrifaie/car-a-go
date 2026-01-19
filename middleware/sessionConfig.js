const session = require("express-session");

const configSession = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000,
        httpOnly: true,
        sameSite: 'lax'
    }
});

module.exports = configSession;