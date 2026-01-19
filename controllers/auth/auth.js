const { User, RememberToken } = require('../../models');
const session = require('express-session');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

exports.getLogin = async (req, res, next) => {
    const message = req.session.message;
    delete req.session.message;

    // Check for remember token and auto-login if valid
    const rememberToken = req.cookies.remember_token;
    if (rememberToken && !req.session.isAuth) {
        try {
            const tokenRecord = await RememberToken.findOne({
                where: { token: rememberToken }
            });

            if (tokenRecord && tokenRecord.expiresAt > new Date()) {
                const user = await User.findByPk(tokenRecord.user_id);
                if (user) {
                    // Auto-login the user
                    req.session.isAuth = 1;
                    req.session.user = {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        category_id: user.category_id
                    };
                    req.session.fullName = `${user.firstName} ${user.lastName}`;
                    req.session.userId = user.id;

                    // Redirect based on user category
                    let redirectUrl;
                    if (user.category_id === 1 || user.category_id === 2) {
                        redirectUrl = "/admin";
                    } else if (user.category_id === 3) {
                        redirectUrl = "/account";
                    } else {
                        redirectUrl = "/";
                    }
                    return res.redirect(redirectUrl);
                }
            }
        } catch (error) {
            console.error('Remember token validation error:', error);
        }
    }

    res.render("auth/login.ejs", {
        title: "Login",
        contentTitle: "Login",
        message: message,
        authInfo: { email: null, password: null }
    });
}

exports.postLogin = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });

        if (!user){
            req.session.message = {text: "Invalid Email", class: "warning"};
            return res.redirect("login");
        }

        if (await bcrypt.compare(req.body.password, user.password)){
            req.session.isAuth = 1;
            req.session.user = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                category_id: user.category_id
            };
            req.session.fullName = `${user.firstName} ${user.lastName}`;
            req.session.userId = user.id;

            if (req.body.rememberMe == "1"){
                // Generate secure random token
                const token = crypto.randomBytes(32).toString('hex');
                const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

                // Delete any existing tokens for this user
                await RememberToken.destroy({ where: { user_id: user.id } });

                // Store token in database
                await RememberToken.create({
                    user_id: user.id,
                    token: token,
                    expiresAt: expiresAt
                });

                // Set secure cookie with token
                res.cookie("remember_token", token, {
                    httpOnly: true,
                    sameSite: 'lax',
                    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
                });
            } else {
                // Clear remember token if exists
                if (req.cookies.remember_token) {
                    await RememberToken.destroy({ where: { token: req.cookies.remember_token } });
                    res.clearCookie("remember_token");
                }
            }

            // Redirect based on user category
            let redirectUrl;
            if (user.category_id === 1 || user.category_id === 2) { // Admin or Staff
                redirectUrl = req.query.url || "/admin";
            } else if (user.category_id === 3) { // Customer
                redirectUrl = "/account";
            } else {
                redirectUrl = "/";
            }

            return res.redirect(redirectUrl);
        }

        req.session.message = {text: "Invalid Password", class: "warning"};
        res.redirect("login");
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Error during login');
    }
}

exports.getRegister = (req, res) => {
    res.render("auth/register.ejs", {
        title: "Register",
        contentTitle: "Register",
        message: null
    });
};

exports.postRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            req.session.message = {text: "Email already registered", class: "warning"};
            return res.redirect("/auth/register");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            category_id: 3
        });

        req.session.message = {text: "Registration successful! Please login.", class: "success"};
        res.redirect("/auth/login");
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).send('Error during registration');
    }
};

exports.signout = async (req, res) => {
    // Clear remember token from database if exists
    if (req.cookies.remember_token) {
        try {
            await RememberToken.destroy({ where: { token: req.cookies.remember_token } });
        } catch (error) {
            console.error('Error clearing remember token:', error);
        }
        res.clearCookie('remember_token');
    }

    req.session.destroy((err) => {
        if (err) {
            console.error("Session destroy error:", err);
        }
        res.clearCookie('connect.sid'); // Clear session cookie
        res.redirect("/auth/login");
    });
};